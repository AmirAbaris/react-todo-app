import type { Task as TaskType } from "../models";
import Task from "./Task";

interface TaskListProps {
    tasks: TaskType[];
    removeTask: (id: number) => void;
    toggleTask: (id: number) => void;
}
const TaskList = ({ tasks, removeTask, toggleTask }: TaskListProps) => {
    return (
        <>
            <h1>Tasks to do - {tasks.length}</h1>
            <div className="flex flex-col">
                {tasks.map((task) => (
                    <Task key={task.id} task={task} removeTask={removeTask} toggleTask={toggleTask} />
                ))}
            </div>
        </>
    )
}

export default TaskList;
