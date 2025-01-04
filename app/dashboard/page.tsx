import { redirect } from "next/navigation"
import ListSideBar from "../components/ListSideBar"
import { MainNav } from "../components/MainNav"
import UserNav from "../components/UserNav"
import PomodoroTimer from "../components/PomodoroTimer"
import CreateTask from "../components/CreateTask"
import { TaskList } from "../components/Tasklist"


export default async function DashboardPage() {
    const session = await auth()

    if (!session) {
        redirect('/api/auth/signin')
    }
    return (
        <div className="flex min-h-screen">
           <ListSideBar />
           <div className="flex-1">
            <header className="border-b">
                <div className="flex h-16 items-center px-4 gap-4">
                    <MainNav />
                    <div className="ml-auto flex items-center space-x-4">
                        <UserNav user={session.user} /> 
                    </div>
                </div>
            </header>
            <main className="flex gap-6 p-6">
                <div className="flex flex-col gap-6 w-96">
                    <PomodoroTimer />
                    <CreateTask />
                </div>
                <div className="flex-1">
                    <TaskList />
                </div>
            </main>
           </div>
        </div>
    )
}