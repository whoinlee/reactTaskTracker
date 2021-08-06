import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//-- Components
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import About from './components/About';
//-- Contexts
import { GlobalProvider } from './contexts/GlobalState';
//-- Styles
import { Wrapper } from './App.styles';


function App() {
  // const [state, dispatch] = useReducer(AppReducer, InitialState);
  const [showAddTask, setShowAddTask] = useState(false);
  // console.log("App :: state.showAddTask ? " + state.showAddTask);

  return (
    <Router>
        <Wrapper>
          <GlobalProvider >
            <Header title="Task Tracker" onAddClicked={()=>setShowAddTask(!showAddTask)}/>
            <Route path='/' >
              <>
                {showAddTask && <AddTask />}
                {/* <AddTask /> */}
                <Tasks />
              </>
            </Route>
          </GlobalProvider>
          <Route path='/about' component={About} />
          <Footer />
        </Wrapper>
    </Router>
  );
}

export default App;
