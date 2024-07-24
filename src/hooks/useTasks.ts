// import { useState } from "react";

// export interface TaskProps {
//     id: number;
//     text: string;
//     completed: boolean;
// }

// const useTasks = () => {
//     const [tasks, setTasks] = useState<TaskProps[]>([]);

//     const addTask = (text: string): void => {
//         const newTask: TaskProps = {
//             id: Date.now(),
//             text,
//             completed: false
//         };
//         setTasks([...tasks, newTask]);
//     };

//     const removeTask = (id: number): void => {
//         setTasks(tasks.filter(task => task.id !== id));
//     };

//     const toggleTask = (id: number): void => {
//         setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
//     };

//     return { tasks, addTask, removeTask, toggleTask };
// }

// export default useTasks;