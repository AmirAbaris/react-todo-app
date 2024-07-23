import { useState } from "react";

interface AddTaskProps {
    addTask: (task: string) => void;
}

const AddTask = ({ addTask }: AddTaskProps) => {
    const [task, setTask] = useState(null);
    return (
        <form>

        </form>
    );
}

export default AddTask;
