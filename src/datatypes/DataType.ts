export type TaskType = {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
}

export type State = {
    tasks: TaskType[];
    showAddTask: boolean;
    deleteTask: (id:number) => void;
    addTask: (task:TaskType) => void;
    toggleReminder: (id:number) => void;
}

export type Action =  
| { type: 'DELETE_TASK', payload: number }
| { type: 'ADD_TASK', payload: TaskType }
| { type: 'TOGGLE_REMINDER', payload: number }
// | { type: 'TRANSACTION_ERROR'}