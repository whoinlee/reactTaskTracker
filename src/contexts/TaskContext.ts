import { createContext } from 'react';
//-- Types
import { TaskType } from '../datatypes/DataType';

export interface ITaskContext {
    tasks: TaskType[],
    showAddTask: boolean
};

export const TaskContext = createContext({} as ITaskContext);