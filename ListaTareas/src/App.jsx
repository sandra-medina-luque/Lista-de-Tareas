import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Task from './components/Task'


function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = e => {
    setTask(e.target.value)
  }

  const addTask = e => {
    e.preventDefault();
    if (task.trim() === '') {
      alert('Debes agregar algo')
      return;
    }

    const newTask = {
      id: Date.now(),
      task,
      complete: false
    }

    const totalTask = [newTask, ...tasks]
    setTasks(totalTask);
    setTask('')
  }

  const deletedTasks = id =>{
    const updatedTasks = tasks.filter (task =>{ 
      return task.id !== id
    })
    setTasks(updatedTasks)
  }

  return (
    <>
      <h2>To Do List</h2>
      <Form
        handleChange={handleChange}
        addTask={addTask}
        task={task}
      />
      {tasks.map(task => (
      <Task
      key = {task.id}
      id = {task.id}
      task = {task}
      deletedTask = {deletedTasks}
      
      />
      ))}

    </>
  )
}

export default App
