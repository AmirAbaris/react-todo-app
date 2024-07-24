import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            <AddTask />
            <TaskList />
        </div>
    );
}

export default Home;
