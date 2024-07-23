import { useState } from "react";

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[] | undefined>(undefined);

    const addTask = (text: string) => {
        const newTask: Task = {
            id: Date.now(),
            text,
            completed: false
        };
        // TODO: might be bug here!
        if (!tasks) return;
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id: number) => {
        if (!tasks) return;
        setTasks(tasks.filter(task => task.id === id));
    };

    const toggleTask = (id: number) => {
        if (!tasks) return;
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    return { tasks, addTask, removeTask, toggleTask };
};

export default useTasks;