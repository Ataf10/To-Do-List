import React, { useEffect, useState } from "react";
import Clock from "./Clock";
import { LuListTodo } from "react-icons/lu";
import "./todolist.css";
import ShowList from "./ShowList";
import { IoIosAddCircle } from "react-icons/io";

/*===============================Main function=====================================*/

const TodoList = () => {
  /*storing the tasks in local storage */
  const getLocalData = () => {
    let data = localStorage.getItem("list");
    if (data) {
      return JSON.parse(data);
    } else {
      return []; // Return an empty array if no data exists
    }
  };

  /*Initializing Two new states===================================================================
  one to store the whole task array of objects and the other one is to store the new task object
  */
  const [tasks, setTasks] = useState(getLocalData);
  const [newTask, setNewTask] = useState("");

  /* Filter tasks based on the filter state */

  function updateStore(list) {
    localStorage.setItem("list", JSON.stringify(list));
    setTasks(list);
  }

  /*========================================Input handler function=================================== */
  function handleInput(e) {
    setNewTask(e.target.value);
  }

  /*===========================function for deleting the task from the list of tasks=========================== */
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  /*================ funtion to change the status of a task from pending to complete and vice versa==============*/
  function changeStatus(id) {
    let tasklist = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completion: !task.completion,
          }
        : task
    );
    updateStore(tasklist);
  }

  function addTask(input) {
    if(input.trim().length<50)alert("You can enter only 50 character long input")
    if (input.trim().length > 0 && input.trim().length<50) {
      let tasklist = tasks;
      tasklist.push({
        name: input.trim(),
        completion: false,
        id: Date.now(),
      });
      updateStore(tasklist);
    }
    setNewTask("");
  }

  function handleKeydown(e) {
    if (e.keyCode === 13) {
      addTask(newTask);
      setNewTask("");
      e.target.value = "";
    }
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">
          <LuListTodo />
          Let's Do It!
        </h1>
        <Clock />
        <div className="header">
          <input
            className="input"
            type="text"
            placeholder={"Add a task"}
            name="name"
            onChange={(e) => handleInput(e)}
            onKeyDown={handleKeydown}
          />
          <button style={{color:"green"}} onClick={() => addTask(newTask)}>
            <IoIosAddCircle />
          </button>
        </div>
        <div className="bothlist">
          <ShowList
            tasks={tasks.filter((item) => item.completion === false)}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
            status="Pending"
          />
          <ShowList
            tasks={tasks.filter((item) => item.completion === true)}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
            status="Completed"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
