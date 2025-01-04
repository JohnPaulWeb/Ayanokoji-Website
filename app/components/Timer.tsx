import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pause, Play, RefreshCcw } from "lucide-react"
import { useEffect, useState } from "react"


export default function Timer() {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let interval: NodeJS.Timeout

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [isRunning])

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds /3600)
        const minutes = Math.floor((seconds) % 3600 / 60)
        const secs = seconds % 60
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return(
        <Card>
            <CardHeader>
                <CardTitle>Focus Timer</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-4x1 font-mono text-center py-4">
                    {formatTime(time)}
                </div>
                <div className="flex justify-center gap-2">
                    <Button variant={"outline"} size={icon} onClick={() => setIsRunning(isRunning)}>
                        {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => setTime(0)}>
                        <RefreshCcw className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}