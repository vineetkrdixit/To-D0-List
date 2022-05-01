import React from "react";
import "./TodoList.css";
import { useState } from "react";
import Display from "./Display";

export default function TodoList() {
  const [list, setText] = useState("");
  const [task, setTask] = useState([]);
  const addToList = () => {
    setText(list);
  };
  const todo = (e) => {
    e.preventDefault();
    const newData = list;
    setTask([...task, newData]);
    setText("");
  };
  const deleteList = () => {
    console.log("you have clicked delete button");
    const deltask = task.pop();
    const finalData = task;
    setTask(finalData);
    console.log(`you have deleted task ${deltask}`);
    console.log(task);
  };
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <form className="container todo" onSubmit={todo}>
        <h1>To-Do-List</h1>
        <input type="text" id="todolist" value={list} onChange={onChange} />

        <br></br>
        <div className="container btnDiv">
          <button
            type="submit"
            className="btn btn-success "
            onClick={addToList}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-danger margin-left"
            onClick={deleteList}
          >
            Delete
          </button>
        </div>
      </form>
      <h1 style={{ textAlign: "center" }}>Whats you plan for today</h1>

      {task.map((val, index) => {
        return <Display item={val} key={index} index={index} />;
      })}
    </>
  );
}
