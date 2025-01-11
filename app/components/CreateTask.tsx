import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function CreateTask() {
    const [title, setTitle] = useState("");

    const createTask = async (formData: FormData) => {
        // Add your task creation logic here
        console.log("Creating task:", formData.get("title"));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add Task</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={async (formData) => {
                    await createTask(formData);
                    setTitle("");
                }}
                    className="flex gap-2">
                    <Input name="title" placeholder="Enter task..." value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Button type="submit">Add</Button>
                </form>
            </CardContent>
        </Card>
    );
}