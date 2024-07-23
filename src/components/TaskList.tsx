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
            {tasks.map((task) => (
                <Task key={task.id} task={task} removeTask={removeTask} toggleTask={toggleTask} />
            ))}
        </>
    )
}

export default TaskList;
