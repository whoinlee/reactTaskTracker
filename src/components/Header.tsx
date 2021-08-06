import React, { useContext, useReducer } from 'react';
//-- Components
import Button from './Button';
//-- Contexts
import AppReducer from '../contexts/AppReducer';
import { GlobalContext } from '../contexts/GlobalState';
//-- Types
import { State, ContextType } from '../datatypes/DataType';
//-- Styles
import { Wrapper } from '../styles/Header.styles';


type Props = { title: string }
const Header = ({ title }:Props) => {
  const { tasks, showAddTask, error } = useContext<ContextType>(GlobalContext);
  const initialState:State = { tasks, showAddTask, error };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  const onAddClicked = () => {
    dispatch({
      type: 'TOGGLE_SHOW_ADDTASK',
      payload: !showAddTask
    });
  }

  return (
    <Wrapper>
      <h1>{title}</h1>
      <Button text={state.showAddTask ? 'Close' : 'Add'} 
              color={state.showAddTask ? 'red': 'green'} 
              onClick={onAddClicked} />
    </Wrapper>
  )
};

export default Header;
