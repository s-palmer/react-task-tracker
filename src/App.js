import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react";



const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Buy soup",
      day: "Jan 1st at 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Eat spaghetti",
      day: "Feb 12th at 2:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Ride bike",
      day: "March 22nd at 9:30am",
      reminder: true,
    },
  ])

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'You have no tasks'}
    </div>
  );
}

export default App;
