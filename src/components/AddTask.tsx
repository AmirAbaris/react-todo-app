import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

interface AddTaskProps {
    addTask: (task: string) => void;
}

const AddTask = ({ addTask }: AddTaskProps) => {
    const [task, setTask] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        if (!task) return;

        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }

    };

    return (
        <form className="flex items-center gap-x-6 px-4" onSubmit={handleSubmit}>
            <Input type="text" label="Add a new Task" value={task} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} />
            <Button color="secondary" type="submit">
                Add Task
            </Button>
        </form>
    );
}

export default AddTask;
