import {useState} from 'react';
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


const tasksArr:TaskType[] = [
  {
      "text": "Doctors Appointment",
      "day": "Feb 6th at 1:30pm",
      "reminder": true,
      "id": 1
    },
  {
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true,
      "id": 2
  },
  {
      "text": "new task",
      "day": "evening",
      "reminder": false,
      "id": 3
  },
]
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(tasksArr);

  const addTask = (task:TaskType) => {
    setTasks([...tasks, task]);
    // console.log("App:: task is ", task);
  };
  const deleteTask = (id:number) => {
    // console.log('App :: deleteTask');
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id:number) => {
    // console.log('App :: toggleReminder');`
    setTasks(tasks.map((task) => 
      (task.id === id) ? {...task, reminder: !task.reminder} : task
    ))
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
