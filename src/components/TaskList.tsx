import type { Task as TaskType } from "../models";
import Task from "./Task";

interface TaskListProps {
    tasks: TaskType[];
    removeTask: (id: number) => void;
    toggleTask: (id: number) => void;
}
const TaskList = ({ tasks, removeTask, toggleTask }: TaskListProps) => {
    const pendingTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <>
            {tasks.length > 0 ? (
                <>
                    <h1 className="my-8">Tasks to do - {pendingTasks.length}</h1>
                    <div className="flex flex-col">
                        {pendingTasks.map((task) => (
                            <Task key={task.id} task={task} removeTask={removeTask} toggleTask={toggleTask} />
                        ))}
                    </div>

                    <h2 className="my-8 mt-20">Done - {completedTasks.length}</h2>
                    <div className="flex flex-col">
                        {completedTasks.map((task) => (
                            <Task key={task.id} task={task} removeTask={removeTask} toggleTask={toggleTask} />
                        ))}
                    </div>
                </>
            ) : <></>}
        </>
    );
}

export default TaskList;
