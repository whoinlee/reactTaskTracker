import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//-- Components
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import About from './components/About';
//-- Contexts
import { GlobalProvider, ShowAddTaskContext } from './contexts/GlobalState';
//-- Styles
import { Wrapper } from './App.styles';


function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <Router>
        <Wrapper>
          <GlobalProvider >
            <ShowAddTaskContext.Provider value={{showAddTask, setShowAddTask}}>
              <Header title="Task Tracker" />
              <Route path='/' >
                <>
                  {showAddTask && <AddTask />}
                  <Tasks />
                </>
              </Route>
            </ShowAddTaskContext.Provider>
          </GlobalProvider>
          <Route path='/about' component={About} />
          <Footer />
        </Wrapper>
    </Router>
  );
}

export default App;
