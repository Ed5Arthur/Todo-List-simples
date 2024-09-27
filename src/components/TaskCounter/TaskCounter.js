import React from "react";
import "./TaskCounter.css";

const TaskCounter = ({ taskCount }) => {
  return <h3 className="task-counter">Total de Tarefas: {taskCount}</h3>;
};

export default TaskCounter;
