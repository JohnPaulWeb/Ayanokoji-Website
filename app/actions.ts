'use server'

export async function createTask(formData: FormData) {
  const title = formData.get('title') as string
  // Add your database logic here
  return {
    id: Math.random().toString(),
    title,
    completed: false,
    createdAt: new Date()
  }
}

export async function toggleTask(id: string) {
  // Add your database logic here
  return { success: true }
}

export async function deleteTask(id: string) {
  // Add your database logic here
  return { success: true }
}

export async function updateTaskDueDate(id: string, date: Date | undefined) {
  // Add your database logic here
  return { success: true }
} 