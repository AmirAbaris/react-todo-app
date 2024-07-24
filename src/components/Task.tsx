import { Button } from "@nextui-org/react";
import { useTasks } from "../context/TaskContext";

interface TaskProps {
    task: { id: number, text: string, completed: boolean };
}

const Task = ({ task }: TaskProps) => {
    const { removeTask, toggleTask } = useTasks();
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
