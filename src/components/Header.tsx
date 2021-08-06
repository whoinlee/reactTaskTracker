import React, { useContext, useReducer } from 'react';
//-- Components
import Button from './Button';
//-- Contexts
import AppReducer from '../contexts/AppReducer';
import { GlobalContext } from '../contexts/GlobalState';
//-- Types
import { State } from '../datatypes/DataType';
//-- Styles
import { Wrapper } from '../styles/Header.styles';


type Props = { title: string; onAddClicked: () => void }
const Header = ({ title, onAddClicked }:Props) => {
  const { tasks, showAddTask, error } = useContext(GlobalContext);
  const initialState:State = { tasks, showAddTask, error };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const onClickHandler = () => {
    onAddClicked();
    dispatch({
      type: 'TOGGLE_SHOW_ADDTASK',
      payload: !state.showAddTask
    });
    console.log("Header :: onClickHandler, state.showAddTask? " + state.showAddTask);
  }

  return (
    <Wrapper>
      <h1>{title}</h1>
      <Button text={state.showAddTask ? 'Close' : 'Add'} 
              color={state.showAddTask ? 'red': 'green'} 
              onClick={onClickHandler} />
    </Wrapper>
  )
};

export default Header;
