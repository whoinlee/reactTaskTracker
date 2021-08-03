import React  from 'react';
//-- Components
import Task from './Task';
//-- Types
import { TaskType } from './DataTypes';


type Props = {
    tasks: TaskType[];
    onDelete: (id:number) => void; 
    onToggle: (id:number) => void;
}
const Tasks:React.FC<Props> = ( {tasks, onDelete, onToggle} )  => {
  return (
    <>
    {tasks.map((task, index) => 
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
    )}
    </>
  )
}

export default Tasks