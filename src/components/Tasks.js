import { useState } from "react";

const Tasks = () => {

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
  ]);

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
