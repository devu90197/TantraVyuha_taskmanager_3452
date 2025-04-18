import React, { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState();

  const addTask = (taskText) => {
    tasks.push({ id: Date.now(), text: taskText, completed: false });
    setTasks(tasks);
  };

  return (
    <div>
      <Header />
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
