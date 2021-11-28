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
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
