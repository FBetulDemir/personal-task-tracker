import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import UpdateTask from "./UpdateTask";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const HandleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleEditClick = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
  };

  const updateTask = (taskId, updatedText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: updatedText } : task
    );

    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTask(null);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentTask(null);
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
    <div className="task-board-container">
      <h1>Task Tracker</h1>
      {!isEditing && (
        <>
          <input
            type="text"
            placeholder="Enter a task..."
            value={textInput}
            onChange={HandleInputChange}
          />
          <button onClick={HandleAddTaskButton}>Add task</button>
        </>
      )}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}

            <DeleteButton taskId={task.id} deleteTask={deleteTask} />
            <button
              className="edit-button"
              onClick={() => handleEditClick(task)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      {isEditing && (
        <UpdateTask
          task={currentTask}
          updateTask={updateTask}
          cancelEdit={cancelEdit}
        />
      )}
    </div>
  );
};

export default TaskBoard;
