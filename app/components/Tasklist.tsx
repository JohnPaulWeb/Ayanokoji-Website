import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import React from "react";

type Task = {
  id: string
  title: string
  completed: boolean
  estimatedTime?: number | null
  actualTime?: number | null
  dueDate?: Date | null
}

export  function Tasklist() {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [loading, setLoading] = React.useState(true)
  const { toast } = useToast()
  
  React.useEffect(() => {
    fetch('/api/tasks')
    .then(res => res.json())
    .then(data => {
      setTasks(data)
      setLoading(false)
    })
    .catch(error => {
      toast({
        title: "Error loading tasks",
        description: error.message,
        variant: "destructive"
      })
      setLoading(false)
    })
  }, [toast])


   const handleCreateTask = async (formData: FormData) => {
    try {
      const newTask = await CreateTask(formData)
      setTasks(prev => [newTask, ...prev])
    } catch (error) {
      toast({
        title: "Error creating Tasking",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive"
      })
    }
   }

   const handleDeleteTask = async (id: string) => {
    try {
      await deleteTask(id)
      setTasks(prev => prev.filter(task => task.id !== id))
    } catch (error) {
      toast({
        title: "Error delete task",
        description: error instanceof Error ? error.message : "Unknow error",
        variant: "destructive"
      })
    }
   }

   const handleUpdateDueDate = async (id: string, date: Date | undefined) => {
    try {
      await updateTaskDueDate(id, date)
      setTasks(prev => prev.map(task =>
        task.id === id ? { ...task, dueDate: date} : task
      ))
    } catch (error) {
      toast({
        title: "Error updating due date",
        description: error instanceof Error ? error.message : "Unknow error",
        variant: "destructive"
      })
    }
   }

   if (loading) {
    return (
      
    )
   }

    return (
      <Card></Card>
    )
}