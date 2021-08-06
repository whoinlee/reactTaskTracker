import { useContext , useEffect }  from 'react';
//-- Components
import Task from './Task';
//-- Contexts
import { GlobalContext } from '../contexts/GlobalState';
//-- Types
// import { ContextType } from '../datatypes/DataType';


const Tasks = ()  => {
  // const { tasks, deleteTask, toggleReminder } = useContext<ContextType>(GlobalContext);
  const { tasks, getTasks } = useContext(GlobalContext);
  useEffect(() => {  
    getTasks();
    console.log("Tasks :: ever??");
  }, []);

  // console.log("Tasks :: typeof(tasks) is " + typeof(tasks));
  // console.log("Tasks :: typeof(getTasks) is " + typeof(getTasks));

  return (
    <>
      {tasks.length > 0 ? 
        tasks.map((task) => <Task key={task.id} task={task} />) 
      : 'No Tasks To Show'}
    </>
  )
}

export default Tasks