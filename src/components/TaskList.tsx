import Task from "./Task";

interface TaskListProps {
    tasks: Array<{ id: number, text: string, completed: boolean }>;
    removeTask: (id: number) => void;
    toggleTask: (id: number) => void;
}

const TaskList = ({ tasks, removeTask, toggleTask }: TaskListProps) => {
    const pendingTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    // helper function to render tasks
    const renderTasks = (taskList: Array<{ id: number, text: string, completed: boolean }>) => (
        taskList.map(task => (
            <Task
                key={task.id}
                task={task}
                removeTask={removeTask}
                toggleTask={toggleTask}
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
