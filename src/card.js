import React from "react";
import ReactDOM from "react-dom/client";
let arr = [1, 2, 3];
export default function Rectangle() {
  return (
    <div className="rect-border">
      <div className="rectangle-og-border">
        <RectText />
        <Circle props="arr" />
      </div>
      <TextInput/>
      <Task/>
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

function Circle({ arr }) {
  return (
    <div className="circle">
      <span className="number-count">1/3</span>
    </div>
  );
}

function TextInput() {
  return (
    <div className="input-div">
      <input type="text" placeholder="write your next task" className="input-field"/>
      <button className="add-button">+</button>
    </div>
  );
}

function Task(){
    return (
      <div className="task-box">
        <div className="check-box-text">
          <button className="radio-btn"></button>
          <span className="task-text">Task 1</span>
        </div>
        <div className="edit-delete-btn">
          <button className="edit-btn">
            <img src="/edit.png" className="edit-btn-img"/>
          </button>
          <button className="delete-btn">
            <img src="/trash.png" className="delete-btn-img"/>
          </button>
        </div>
      </div>
    );
}
