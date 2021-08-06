import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//-- Types
import { TaskType, State, ContextType } from '../datatypes/DataType';


export const InitialState:State = {
  tasks: [],
  showAddTask: false,
  error: ''
};

//-- create global Context, GlobalContext
export const GlobalContext = createContext({} as ContextType);


//-- create global Provider component, GlobalProvider
type Props = { children?: React.ReactNode };
export const GlobalProvider = ({ children }:Props) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  const API_URL = 'http://localhost:5000/tasks';
  const getTasks = async() => {
    try {
      const tasksFromServer = await(await fetch(API_URL)).json();
      console.log("GlobalState :: GlobalProvider, getTasks, tasksFromServer  is " + tasksFromServer );
      dispatch({
        type: 'GET_TASKS',
        payload: tasksFromServer
      });
    } catch (e) {
      console.log("GlobalState :: GlobalProvider, getTasks, e is " + e);
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: e.data.error  //TODO, trace and double check data type
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
      console.log("GlobalState :: GlobalProvider, addTask dispatches ADD_TASK, new task ? " + data);
    }
    catch (e) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: e.data.error  //TODO, trace and double check data type
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
        payload: e.data.error  //TODO, trace and double check data type
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
      // const data = await res.json();
      dispatch({
        type: 'TOGGLE_REMINDER',
        payload: id
      });
    } catch (e) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: e.data.error  //TODO, trace and double check data type
      });
    }
  };

  return (
    <GlobalContext.Provider value={{tasks: state.tasks, showAddTask: state.showAddTask, error: state.error, 
                                    getTasks, addTask, deleteTask, toggleReminder}} >
        {children}
    </GlobalContext.Provider>
  );
};