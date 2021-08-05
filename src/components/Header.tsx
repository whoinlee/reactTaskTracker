import React, { useContext } from 'react';
//-- Components
import Button from './Button';
//-- Contexts
import { TaskContext, Context } from '../contexts/TaskContext';
//-- Styles
import { Wrapper } from '../styles/Header.styles';


type Props = {
    title: string;
    onAdd: () => void;
}
const Header:React.FC<Props> = ({ title, onAdd}) => {
  const { showAddTask } = useContext<Context>(TaskContext);

  return (
    <Wrapper>
      <h1>{title}</h1>
      <Button text={showAddTask ? 'Close' : 'Add'} 
              color={showAddTask ? 'red': 'green'} 
              onClick={onAdd} />
    </Wrapper>
  )
}

export default Header
