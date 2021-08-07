import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//-- Types
import { TaskType, State } from '../datatypes/DataType';


//-- create Contexts
interface IShowAddTaskContext {
  showAddTask: boolean,
  setShowAddTask: (val:boolean) => void
};
export const ShowAddTaskContext = createContext({} as IShowAddTaskContext);
//
interface IGlobalContext {
  tasks:TaskType[],
  error: string,
  getTasks: () => void,
  addTask: (task:TaskType) => void,
  deleteTask: (id:number) => void,
  toggleReminder: (id:number) => void 
};
export const GlobalContext = createContext({} as IGlobalContext);


//-- create global Provider component, GlobalProvider
type Props = { children?: React.ReactNode };
export const GlobalProvider = ({ children }:Props) => {
  const InitialState:State = {
    tasks: [],
    error: ''
  };
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  const API_URL = 'http://localhost:5000/tasks';
  const getTasks = async() => {
    try {
      const tasksFromServer = await(await fetch(API_URL)).json();
      dispatch({
        type: 'GET_TASKS',
        payload: tasksFromServer
      });
    } catch (e) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: e.message
      });
    }
  };

  const addTask = async(task:TaskType) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      });
      const data = await res.json();
      dispatch({
        type: 'ADD_TASK',
        payload: data
      });
      // console.log("GlobalState :: GlobalProvider, addTask dispatches ADD_TASK, new task ? " + data);
    }
    catch (e) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: e.message
      });
    }
  };

  const deleteTask = async(id:number) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })
      dispatch({
        type: 'DELETE_TASK',
        payload: id
      });
    } catch (e) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: e.message
      });
    }
  };

  const toggleReminder = async(id:number) => {
    try {
      const taskToToggle = await(await fetch(`${API_URL}/${id}`)).json();
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      });
      await res.json();
      dispatch({
        type: 'TOGGLE_REMINDER',
        payload: id
      });
    } catch (e) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: e.message
      });
    }
  };

  return (
    <GlobalContext.Provider value={{tasks: state.tasks, error: state.error, 
                                    getTasks, addTask, deleteTask, toggleReminder}} >
        {children}
    </GlobalContext.Provider>
  );
};