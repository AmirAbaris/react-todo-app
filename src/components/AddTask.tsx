import { Button, Input } from "@nextui-org/react";
import { useReducer } from "react";

interface AddTaskProps {
    addTask: (task: string) => void;
}

type State = {
    task: string;
};

type Action =
    | { type: 'SET_TASK', payload: string }
    | { type: 'RESET_TASK' };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_TASK':
            return { ...state, task: action.payload };
        case 'RESET_TASK':
            return { ...state, task: '' };
    }
};

const AddTask = ({ addTask }: AddTaskProps) => {
    const [state, dispatch] = useReducer(reducer, { task: '' });

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (state.task.trim()) {
            addTask(state.task);
            dispatch({ type: 'RESET_TASK' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({ type: 'SET_TASK', payload: e.target.value });
    };

    return (
        <form className="flex items-center gap-x-6" onSubmit={handleSubmit}>
            <Input type="text" label="Add a new Task" value={state.task} onChange={handleChange} />
            <Button color="secondary" type="submit">
                Add Task
            </Button>
        </form>
    );
}

export default AddTask;
