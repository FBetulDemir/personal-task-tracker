import React from "react";

const DeleteButton = ({ taskId, deleteTask }) => {
  return (
    <button onClick={() => deleteTask(taskId)} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteButton;
