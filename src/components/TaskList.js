import React from "react";
import Task from "./Task";

function TaskList({tasks, onHandleDelete}) {
  const tasksMap = tasks.map(function (task){
    return <Task onHandleDelete={onHandleDelete} key={task.text} category={task.category} text={task.text}/>
  })
  return (
    <div className="tasks"> {tasksMap} </div>
  );
}

export default TaskList;