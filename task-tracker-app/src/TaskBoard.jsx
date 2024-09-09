import React, { useEffect, useState } from "react";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("");
  // const [deleteTask, setDeleteTask] = useState("");
  // const [updateTask, setUpdateTask] = useState("");

  let HandleInputChange = (event) => {
    const newInput = event.target.value;
    setTextInput(newInput);
  };

  const HandleAddTaskButton = () => {
    textInput === "" ? null : setTasks([...tasks, textInput]);
    setTextInput("");
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
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskBoard;
