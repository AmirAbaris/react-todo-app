import { useState } from "react";
import { Task } from "../models";

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (text: string) => {
        const newTask: Task = {
            id: Date.now(),
            text,
            completed: false
        };
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