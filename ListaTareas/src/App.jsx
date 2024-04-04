import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Task from './components/Task'

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) { localStorage.setItem('tasks', JSON.stringify(tasks)) };
  }, [tasks]);

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

  const deletedTasks = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
  }

  return (
    <>
      <h2>To Do List</h2>
      <Form
        handleChange={handleChange}
        addTask={addTask}
        task={task}
      />
      {tasks.length > 1 && (
        <button onClick={() => {
          localStorage.removeItem('tasks');
          setTasks([]);
        }}>Vaciar Tareas</button>
      )}
      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          task={task}
          deletedTask={deletedTasks}
        />
      ))}
    </>
  )
}

export default App
