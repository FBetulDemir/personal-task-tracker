import React from "react";

const DeleteButton = ({ taskId, deleteTask }) => {
  return <button onClick={() => deleteTask(taskId)}>Delete</button>;
};

export default DeleteButton;
