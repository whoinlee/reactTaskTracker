import React, { useState, useContext } from 'react';
//-- Contexts
import { GlobalContext } from '../contexts/GlobalState';
//-- Styles
import { Wrapper } from '../styles/AddTask.styles'


const AddTask = () => {
  const { addTask } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit:React.FormEventHandler = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!text) {
        alert('Please add a task');
    }
    const id = Math.floor(Math.random()*1000) + 1;  //TODO: check if unique
    addTask ({ text, day, reminder, id });
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <Wrapper onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Task</label>
          <input  type="text" placeholder="Add Task" value={text}
                  onChange={e=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label>Day & Time</label>
          <input  type="text" placeholder="Add Day & Time" value={day} 
                  onChange={e=>setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
          <label>Set Reminder</label>
          <input  type="checkbox" 
                  checked={reminder}
                  onChange={e => setReminder(e.currentTarget.checked)} />
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
    </Wrapper>
  )
}

export default AddTask;