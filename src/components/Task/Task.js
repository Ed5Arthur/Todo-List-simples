import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import "./Task.css";

const Task = ({ task, index, deleteTask }) => {
  return (
    <li className="task">
      {task}
      <DeleteButton onClick={() => deleteTask(index)} />
    </li>
  );
};

export default Task;
