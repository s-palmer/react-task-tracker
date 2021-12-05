import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate, useLocation } from "react-router";
import Button from "./Button";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <p>Path: {pathname}</p>
      <Button onClick={() => {
        navigate(-1)
      }} text='Go Back' />
    </div>
  );
};

export default TaskDetails;
