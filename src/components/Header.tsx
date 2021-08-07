import { useContext } from 'react';
//-- Components
import Button from './Button';
//-- Contexts
import { ShowAddTaskContext } from '../contexts/GlobalState';
//-- Styles
import { Wrapper } from '../styles/Header.styles';


type Props = { title: string; }
const Header = ({ title }:Props) => {
  const { showAddTask, setShowAddTask } = useContext(ShowAddTaskContext);

  return (
    <Wrapper>
      <h1>{title}</h1>
      <Button text={showAddTask ? 'Close' : 'Add'} 
              color={showAddTask ? 'red': 'green'} 
              onClick={() => setShowAddTask(!showAddTask)} />
    </Wrapper>
  )
};

export default Header;
