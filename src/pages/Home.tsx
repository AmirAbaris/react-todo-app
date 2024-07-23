import AddTask from "../components/AddTask";
import useTasks from "../hooks/useTasks";

const Home = () => {
    const { tasks, addTask, removeTask, toggleTask } = useTasks();

    return (
        <div className="container mx-auto">
            <AddTask addTask={addTask} />
        </div>
    );
}

export default Home;
