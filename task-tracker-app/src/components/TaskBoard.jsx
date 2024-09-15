import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("");

  const HandleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const HandleAddTaskButton = () => {
    if (textInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: textInput,
    };

    setTasks([...tasks, newTask]);
    setTextInput("");
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Tracker</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={textInput}
        onChange={HandleInputChange}
      />
      <button onClick={HandleAddTaskButton}>Add task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}

            <DeleteButton taskId={task.id} deleteTask={deleteTask} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskBoard;
