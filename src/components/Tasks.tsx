import React, { useContext }  from 'react';
//-- Components
import Task from './Task';
//-- Contexts
import { TaskContext, Context } from '../contexts/TaskContext';


type Props = {
    onDelete: (id:number) => void; 
    onToggle: (id:number) => void;
}
const Tasks:React.FC<Props> = ( {onDelete, onToggle} )  => {
  const { tasks } = useContext<Context>(TaskContext);
  return (
    <>
      {tasks.map((task, index) => 
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      )}
    </>
  )
}

export default Tasks