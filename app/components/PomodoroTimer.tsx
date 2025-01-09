import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/hooks/use-toast"
import { Pause, Play, RefreshCcw } from "lucide-react"
import React from "react"



interface TimerState {
    mode: 'work' | 'break'
    timeLeft: number
    isRunning: boolean
    workDuration: number
    breakDuration: number
}

export function PomodoroTimer() {

    const [state, setState] = React.useState<TimerState>({
        mode: 'work',
        timeLeft: 25,
        isRunning: false,
        workDuration: 25,
        breakDuration: 5
    })




    React.useEffect(() => {
        let interval: NodeJS.Timeout

        if (state.isRunning) {
           interval = setInterval(() => {
            setState(prev => {
                if(prev.timeLeft <= 1) {
                    const nextMode = prev.mode === 'work' ? 'break' : 'work'
                    const nextDuration = nextMode === 'work' ?
                    prev.workDuration * 60 :
                    prev.breakDuration * 60

                    toast({
                        title: `${nextMode ===  'work' ? 'Break' : 'Work' } time is over!`,
                        description: `Starting ${nextMode} time.`
                    })

                    return {
                        ...prev,
                        mode: nextMode,
                        timeLeft: nextDuration
                    }
                }
                return { ...prev, timeLeft: prev.timeLeft - 1 }
            })
           }, 1000)
        }

        return () => clearInterval(interval)
    }, [state.isRunning, toast])

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const toggleTimer = () => {
        setState(prev => ({ ...prev, isRunning: !prev.isRunning}))
    }

    const resetTimer = () => {
        setState(prev => ({
            ...prev,
            isRunning: false,
            timeLeft: prev.mode === 'work' ? prev.workDuration * 60 : prev.breakDuration
        }))
    }

    return(
       <Card>
        <CardHeader>
            <CardTitle className="flex items-center justify-center">
                <span>Pomodoro Timer</span>
                <div className="flex items-center space-x-2">
                    <Switch checked={state.mode === 'break'}
                    onCheckedChange={toggleMode} />
                    <Coffe className="h-4 w-4" />
                </div>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-6">
                <div className="text-6xl font-mono text-center tabular-nums">
                    {formatTime(state.timeLeft)}
                </div>
                <div className="flex justify-center gap-2">
                    <Button variant="outline" size="icon" onClick={toggleTimer}>
                        {state.isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="icon" onClick={resetTimer}>
                        <RefreshCcw className="h-4 w-4" />
                    </Button>
                </div>
                <div className="space-7-4">
                    <div className="space-7-2">
                        <label className="text-sm font-medium">
                            Work Duration: {stae.workDuration}min
                        </label>
                        <Slider value={[state.workDuration]} min={1} max={60} step={1} onValueChange={([value]) => {
                            setState(prev => ({
                                ...prev,
                                breakDuration: value,
                                timeLeft: prev.mode === 'break' ? value * 60 : prev.timeLeft
                            }))
                        }}></Slider>
                    </div>
                </div>
            </div>
        </CardContent>
       </Card>
    )
}

