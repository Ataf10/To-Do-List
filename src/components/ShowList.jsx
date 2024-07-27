import React from "react";
import "./todolist.css";
import TaskCard from "./TaskCard";

const ShowList = ({ tasks, deleteTask, changeStatus,status }) => {
  return (
    <div className="lists">
      <div className="inner-list">
        <h2 className="listheading">{status}</h2>
        {tasks.map((item, index) => (
          <ul key={index}>
            <li>
              <TaskCard item={item} deleteTask={deleteTask} changeStatus={changeStatus}/>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
