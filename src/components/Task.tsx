import { Button } from "@nextui-org/react";
import type { Task } from "../models";

interface TaskProps {
    task: Task;
    removeTask: (id: number) => void;
    toggleTask: (id: number) => void;
}

const Task = ({ task, removeTask, toggleTask }: TaskProps) => {
    return (
        <div className="flex items-center justify-between py-2">
            <span className={task.completed ? 'line-through text-minty-fresh' : 'text-lavender-blush text-base'}>{task.text}</span>

            <div className="flex gap-x-2">
                <Button onClick={() => toggleTask(task.id)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </Button>
                <Button onClick={() => removeTask(task.id)}>Delete</Button>
            </div>
        </div>
    )
}

export default Task;
