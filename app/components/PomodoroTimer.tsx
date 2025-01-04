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
            setState(prev => {
                if (prev.timeLeft <= 1) {
                    const nextMode = prev.mode === 'work' ? 'break' : 'work'
                    const nextDuration = nextMode === 'work' ?
                    prev.workDuration * 60 :
                    prev.breakDuration * 60

                    //dito me nagtapos | di ko pa siya tapos

                    toast
                }
            })
        }
    })
    return(
        <>

        </>
    )
}