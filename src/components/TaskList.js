import React from "react";

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text} {task.completed ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
