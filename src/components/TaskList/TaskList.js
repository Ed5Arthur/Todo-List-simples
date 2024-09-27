import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="task-list">
      <h2>Minhas Tarefas</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} index={index} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
