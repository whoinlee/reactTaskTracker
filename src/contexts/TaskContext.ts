import { createContext } from 'react';
//-- Types
import { TaskType } from '../datatypes/DataType';


export interface Context {
    tasks:TaskType[],
    showAddTask: boolean
}
export const TaskContext = createContext({} as Context);