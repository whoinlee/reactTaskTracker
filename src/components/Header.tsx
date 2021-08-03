import React, { useContext } from 'react';
//-- Components
import Button from './Button';
//-- Contexts
import { TasksContext, Context } from '../contexts/TasksContext';
//-- Types
// import { TaskType } from './datatypes/DataTypes';
//-- Styles
import { Wrapper } from './Header.styles';


type Props = {
    title: string;
    onAdd: () => void;
    // showAddTask: boolean;
}

// const Header:React.FC<Props> = ({ title, onAdd, showAddTask }) => {
const Header:React.FC<Props> = ({ title, onAdd}) => {

  const { showAddTask } = useContext<Context>(TasksContext);

  return (
    <Wrapper>
      <h1>{title}</h1>
      <Button text={ showAddTask ? 'Close' : 'Add'} 
              color={showAddTask ? 'red': 'green'} 
              onClick={onAdd} 
      />
    </Wrapper>
  )
}

export default Header
