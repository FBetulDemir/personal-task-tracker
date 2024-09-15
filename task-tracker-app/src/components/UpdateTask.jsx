import React, { useState } from "react";

const UpdateTask = ({ task, updateTask, cancelEdit }) => {
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleUpdateInputChange = (event) => {
    setUpdatedText(event.target.value);
  };

  const handleUpdateTask = () => {
    updateTask(task.id, updatedText);
  };

  return (
    <div className="edit-task-container">
      <input
        type="text"
        value={updatedText}
        onChange={handleUpdateInputChange}
        className="edit-input"
      />
      <button onClick={handleUpdateTask} className="update-task-button">
        Update Task
      </button>
      <button onClick={cancelEdit} className="cancel-button">
        Cancel
      </button>
    </div>
  );
};

export default UpdateTask;
