import { useContext }  from 'react';
import { FaTimes } from 'react-icons/fa';
//-- Styles
import { Wrapper } from '../styles/Task.styles';
//-- Types
import { TaskType } from '../datatypes/DataType';
//-- Contexts
import { GlobalContext } from '../contexts/GlobalState';


type Props = { task: TaskType; }
const Task = ({ task }:Props) => {
  const { deleteTask, toggleReminder } = useContext(GlobalContext);

  return (
    <Wrapper >
      <div  className={`${task.reminder ? 'reminder': ''}`} 
            onDoubleClick={e => toggleReminder(task.id)} >
        <h3>{task.text}<FaTimes className='faTimes' onClick={(e) => {deleteTask(task.id)}}/></h3>
        <p>{task.day}</p>
      </div>
    </Wrapper>
  )
}

export default Task
