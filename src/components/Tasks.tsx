import React, { useContext }  from 'react';
//-- Components
import Task from './Task';
//-- Contexts
import { TasksContext, Context } from '../contexts/TasksContext';
//-- Types
// import { TaskType } from '../datatypes/DataTypes';


type Props = {
    // tasks: TaskType[];
    onDelete: (id:number) => void; 
    onToggle: (id:number) => void;
}

// const Tasks:React.FC<Props> = ( {tasks, onDelete, onToggle} )  => {
const Tasks:React.FC<Props> = ( {onDelete, onToggle} )  => {
  const { tasks } = useContext<Context>(TasksContext);
  return (
    <>
    {tasks.map((task, index) => 
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
    )}
    </>
  )
}

export default Tasks