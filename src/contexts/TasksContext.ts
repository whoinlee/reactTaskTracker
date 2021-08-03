import {createContext} from 'react';
//-- Types
import { TaskType } from '../datatypes/DataTypes';


export interface Context {
    tasks:TaskType[],
    showAddTask: boolean
}

export const TasksContext = createContext({} as Context);