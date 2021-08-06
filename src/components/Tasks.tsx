import { useContext , useEffect }  from 'react';
//-- Components
import Task from './Task';
//-- Contexts
import { GlobalContext } from '../contexts/GlobalState';


const Tasks = ()  => {
  const { tasks, getTasks } = useContext(GlobalContext);

  useEffect(() => {  
    getTasks();
    console.log("Tasks :: ever??");
  }, []);

  return (
    <>
      {tasks.length > 0 ? 
        tasks.map((task) => <Task key={task.id} task={task} />) 
      : 'No Tasks To Show'}
    </>
  )
}

export default Tasks