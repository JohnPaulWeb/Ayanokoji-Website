'use client'

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Clock, Trash2 } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { createTask, toggleTask, deleteTask, updateTaskDueDate } from "@/app/actions"

type Task = {
  id: string
  title: string
  completed: boolean
  estimatedTime?: number | null
  actualTime?: number | null
  dueDate?: Date | null
}

export function TaskList() {
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
      const newTask = await createTask(formData)
      setTasks(prev => [newTask, ...prev])
    } catch (error) {
      toast({
        title: "Error creating task",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive"
      })
    }
  }
  
  const handleToggleTask = async (id: string) => {
    try {
      await toggleTask(id)
      setTasks(prev => prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ))
    } catch (error) {
      toast({
        title: "Error updating task",
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
        title: "Error deleting task",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive"
      })
    }
  }
  
  const handleUpdateDueDate = async (id: string, date: Date | undefined) => {
    try {
      await updateTaskDueDate(id, date)
      setTasks(prev => prev.map(task => 
        task.id === id ? { ...task, dueDate: date } : task
      ))
    } catch (error) {
      toast({
        title: "Error updating due date",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive"
      })
    }
  }
  
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-12 rounded-lg bg-muted animate-pulse"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-accent group"
            >
              <div className="flex items-center gap-2 flex-1">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => handleToggleTask(task.id)}
                />
                <span className={cn(
                  "flex-1",
                  task.completed && "line-through text-muted-foreground"
                )}>
                  {task.title}
                </span>
                {task.estimatedTime && (
                  <span className="text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {task.estimatedTime}min
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <CalendarIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={task.dueDate ?? undefined}
                      onSelect={(date) => handleUpdateDueDate(task.id, date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          {tasks.length === 0 && (
            <p className="text-center text-muted-foreground">
              No tasks yet. Add one above!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

