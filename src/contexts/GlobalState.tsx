import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//-- Types
import { TaskType, State } from '../datatypes/DataType';


const initialState:State = {
  tasks: [],
  showAddTask: false,
  deleteTask: (id:number) => {},
  addTask: (task:TaskType) => {},
  toggleReminder: (id:number) => {}
}
export const GlobalContext = createContext(initialState);

//-- Provider component
type Props = { children?: React.ReactNode };
export const GlobalProvider = ({ children }:Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTask = (id:number) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    });
  };
  
  const addTask = (task:TaskType) => {
    dispatch({
      type: 'ADD_TASK',
      payload: task
    });
  };

  const toggleReminder = (id:number) => {
    dispatch({
      type: 'TOGGLE_REMINDER',
      payload: id
    });
  };

  return (
    <GlobalContext.Provider value={{tasks: state.tasks, showAddTask: state.showAddTask, deleteTask, addTask, toggleReminder}} >
        {children}
    </GlobalContext.Provider>
  );
};