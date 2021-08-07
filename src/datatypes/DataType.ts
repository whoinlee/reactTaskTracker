export type TaskType = {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
};

export type State = {
    tasks: TaskType[];
    error: string;
};

export type Action =  
| { type: 'GET_TASKS', payload: TaskType[] }
| { type: 'ADD_TASK', payload: TaskType }
| { type: 'DELETE_TASK', payload: number }
| { type: 'TOGGLE_REMINDER', payload: number }
| { type: 'TRANSACTION_ERROR', payload: string }