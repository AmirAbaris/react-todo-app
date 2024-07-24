import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const AddTask = () => {
    const { addTask } = useTasks();
    const [task, setTask] = useState<string>('');

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
    };

    return (
        <form className="flex items-center gap-x-6" onSubmit={handleSubmit}>
            <Input type="text" label="Add a new Task" value={task} onChange={handleChange} />
            <Button color="secondary" type="submit">
                Add Task
            </Button>
        </form>
    );
}

export default AddTask;
