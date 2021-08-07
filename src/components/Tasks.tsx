import { useContext , useState, useEffect }  from 'react';
//-- Components
import Task from './Task';
//-- Contexts
import { GlobalContext } from '../contexts/GlobalState';


const Tasks = ()  => {
  const { tasks, getTasks } = useContext(GlobalContext);
  const [ getTasksFired, setGetTasksFired ] = useState(false);

  useEffect(() => {  
    if (!getTasksFired) {
      getTasks();
      setGetTasksFired(true);
    }
  }, [getTasks, getTasksFired]);

  return (
    <>
      {tasks.length > 0 ? 
        tasks.map((task) => <Task key={task.id} task={task} />) 
      : 'No Tasks To Show'}
    </>
  )
}

export default Tasks