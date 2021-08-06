import { useContext }  from 'react';
//-- Components
import Task from './Task';
//-- Contexts
import { GlobalContext } from '../contexts/GlobalState';


const Tasks = ()  => {
  const { tasks, getTasks } = useContext(GlobalContext);

  // useEffect(() => {  
    if (tasks.length === 0) {
      getTasks();
    }
  // }, []);

  return (
    <>
      {tasks.length > 0 ? 
        tasks.map((task) => <Task key={task.id} task={task} />) 
      : 'No Tasks To Show'}
    </>
  )
}

export default Tasks