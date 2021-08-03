import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//-- Components
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import About from './components/About';
//-- Styles
import { Wrapper } from './App.styles';
//-- Types
import { TaskType } from './components/DataTypes';


//-- moved to db.son
// const tasksArr:TaskType[] = [
//   {
//       "text": "Doctors Appointment",
//       "day": "Feb 6th at 1:30pm",
//       "reminder": true,
//       "id": 1
//     },
//   {
//       "text": "Meeting at School",
//       "day": "Feb 6th at 1:30pm",
//       "reminder": true,
//       "id": 2
//   },
//   {
//       "text": "new task",
//       "day": "evening",
//       "reminder": false,
//       "id": 3
// }]
const tasksArr:TaskType[] = [];
const API_URL = 'http://localhost:5000/tasks'; //-- through json-server

function App() {
  const [tasks, setTasks] = useState(tasksArr);
  const [showAddTask, setShowAddTask] = useState(false);
  useEffect(() => {       //useEffect calling function can't be an async, useEffect(async() => ) (X)
    // const fetchTasks = async() => {
    //   const data = await(await fetch(API_URL)).json();
    // }
    // fetchTasks();
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

  const fetchTasks = async() => {
    const res = await fetch(API_URL);  
    const data = await res.json();
    //console.log("App:: fetchTasks, data is ", data); ===> return data
    return data;
  };

  const fetchATask = async(id:number) => {
    const res = await fetch(`${API_URL}/${id}`);  
    const data = await res.json();
    //console.log("App:: fetchATask, data is ", data);
    return data;
  }

  // const addTask = (task:TaskType) => {
  //   setTasks([...tasks, task]);
  // };
  const addTask = async (task:TaskType) => {
    // console.log("App:: addTask, task is ", task);
    // const res = await fetch(API_URL, {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    //-- the following code had some type issue
    // const data = await res.json();
    // setTasks([...tasks, data]);
    setTasks([...tasks, task]);
  };

  // const deleteTask = (id:number) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };
  const deleteTask = async (id:number) => {
    // console.log('App :: deleteTask');
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // const toggleReminder = (id:number) => {
  //   setTasks(tasks.map((task) => 
  //     (task.id === id) ? {...task, reminder: !task.reminder} : task
  //   ))
  // };
  const toggleReminder = async (id:number) => {
    // console.log('App :: toggleReminder');`
    const taskToToggle = await fetchATask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    });
    const data = await res.json();
    setTasks(tasks.map((task) => 
      (task.id === id) ? data : task)
    )
  };

  return (
    <Router>
      <Wrapper>
        <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Route path='/' >
          <>
          {showAddTask && <AddTask addTask={addTask} />}
          {tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          : 'No Tasks To Show'
          }
          </>
        </Route>
        <Route path='/about' component={About} />
        <Footer />

      </Wrapper>
    </Router>
  );
}

export default App;
