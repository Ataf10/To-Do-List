import React from 'react'
import { SiTask } from "react-icons/si";
import { MdDoneOutline } from "react-icons/md";
import { MdDelete} from "react-icons/md";
import "./todolist.css";


const TaskCard = ({item, deleteTask, changeStatus}) => {
  return (
    <div>
        <div className="card">
                <div className="taskname"><SiTask />{item.name}</div>
                <div className="buttons">
                  <button
                    onClick={() => changeStatus(item.id)}
                    style={
                      !item.completion
                        ? { color: "#95a5a6" }
                        : { color: "green" }
                    }
                    className="completebtn"
                  >
                    <MdDoneOutline />
                  </button>
                  <button
                    className="deletebutton"
                    onClick={() => deleteTask(item.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
    </div>
  )
}

export default TaskCard