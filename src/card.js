import React, { useState } from "react";
import ReactDOM from "react-dom/client";

export default function Rectangle() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: Date.now(),
        taskName: newTask,
        checked: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const checkTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const editTask = (id, newTaskName) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, taskName: newTaskName } : task
      )
    );
  };

  return (
    <div className="rect-border">
      <div className="rectangle-og-border">
        <RectText />
        <Circle tasks={tasks} />
      </div>
      <TextInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          checkTask={checkTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}
function RectText() {
  return (
    <div className="text-div">
      <span className="upper-text">Todo Done</span>
      <span className="lower-text">keep it up...</span>
    </div>
  );
}

function Circle({ tasks }) {
  const completedTasks = tasks.filter((task) => task.checked).length;
  return (
    <div className="circle">
      <span className="number-count">
        {completedTasks}/{tasks.length}
      </span>
    </div>
  );
}

function TextInput({ newTask, setNewTask, addTask }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return (
    <div className="input-div">
      <input
        type="text"
        placeholder="write your next task"
        className="input-field"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="add-button" onClick={addTask}>
        +
      </button>
    </div>
  );
}

function Task({ task, deleteTask, checkTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.taskName);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, editedTaskName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-box">
      <div className="check-box-text">
        <button
          className={`radio-btn ${task.checked ? "checked" : ""}`}
          onClick={() => checkTask(task.id)}
        >
          {task.checked ? "✓" : ""}
        </button>
        {isEditing ? (
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
            className="edit-input"
          />
        ) : (
          <span className={`task-text ${task.checked ? "checked" : ""}`}>
            {task.taskName}
          </span>
        )}
      </div>
      <div className="edit-delete-btn">
        <button className="edit-btn" onClick={handleEdit}>
          <img src="/edit.png" className="edit-btn-img" />
        </button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          <img src="/trash.png" className="delete-btn-img" />
        </button>
      </div>
    </div>
  );
}
