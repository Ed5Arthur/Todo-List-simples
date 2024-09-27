import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nova Tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;
