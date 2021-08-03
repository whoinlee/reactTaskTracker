import { FaTimes } from 'react-icons/fa';
//-- Styles
import { Wrapper } from './Task.styles';
//-- Types
import { TaskType } from '../datatypes/TaskType';


type Props = {
  task: TaskType;
  onDelete: (id:number) => void;
  onToggle: (id:number) => void;
}
const Task:React.FC<Props> = ( {task, onDelete, onToggle} ) => {
  return (
    <Wrapper >
      <div  className={`${task.reminder ? 'reminder': ''}`} 
            onDoubleClick={e => onToggle(task.id)} >
        <h3>{task.text}<FaTimes className='faTimes' onClick={(e) => {onDelete(task.id)}}/></h3>
        <p>{task.day}</p>
      </div>
    </Wrapper>
  )
}

export default Task
