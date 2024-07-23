import type { Task } from "../models";

interface TaskProps {
    task: Task;
    removeTask: (id: number) => void;
    toggleTask: (id: number) => void;
}

const Task = ({ task, removeTask, toggleTask }: TaskProps) => {
    return (
        <>
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>

            <button onClick={() => toggleTask(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => removeTask(task.id)}>Delete</button>
        </>
    )
}

export default Task;
