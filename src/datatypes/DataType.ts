export type TaskType = {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
};

export type State = {
    tasks: TaskType[];
    error: string;
    showAddTask: boolean;
};

export type Action =  
| { type: 'GET_TASKS', payload: TaskType[] }
| { type: 'ADD_TASK', payload: TaskType }
| { type: 'DELETE_TASK', payload: number }
| { type: 'TOGGLE_REMINDER', payload: number }
| { type: 'TOGGLE_SHOW_ADDTASK', payload: boolean }
| { type: 'TRANSACTION_ERROR', payload: string }

export type ContextType = {
    tasks:TaskType[],
    showAddTask: boolean,
    error: string,
    getTasks: () => {},
    addTask: (task:TaskType) => {},
    deleteTask: (id:number) => {},
    toggleReminder: (id:number) => {} 
};