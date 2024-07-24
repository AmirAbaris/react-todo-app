import { createContext, useContext, useState } from "react";

export interface TaskProps {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskContextProps {
    tasks: TaskProps[];
    addTask: (text: string) => void;
    removeTask: (id: number) => void;
    toggleTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const addTask = (text: string): void => {
        const newTask: TaskProps = {
            id: Date.now(),
            text,
            completed: false
        }
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id: number): void => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id: number): void => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTasks = (): TaskContextProps => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
};
