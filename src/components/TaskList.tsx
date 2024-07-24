import { useTasks } from "../context/TaskContext";
import Task from "./Task";

const TaskList = () => {
    const { tasks } = useTasks();
    const pendingTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    // helper function to render tasks
    const renderTasks = (taskList: Array<{ id: number, text: string, completed: boolean }>) => (
        taskList.map(task => (
            <Task
                key={task.id}
                task={task}
            />
        ))
    );

    return (
        <>
            {tasks.length > 0 && (
                <>
                    <h1 className="my-8">Tasks to do - {pendingTasks.length}</h1>
                    <div className="flex flex-col">
                        {renderTasks(pendingTasks)}
                    </div>

                    <h2 className="my-8 mt-20">Done - {completedTasks.length}</h2>
                    <div className="flex flex-col">
                        {renderTasks(completedTasks)}
                    </div>
                </>
            )}
        </>
    );
}

export default TaskList;
