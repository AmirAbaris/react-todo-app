import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import useTasks from "../hooks/useTasks";

const Home = () => {
    const { tasks = [], addTask, removeTask, toggleTask } = useTasks();

    return (
        <div className="container mx-auto">
            <AddTask addTask={addTask} />

            <TaskList tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />
        </div>
    );
}

export default Home;
