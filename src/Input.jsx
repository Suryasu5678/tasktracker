import React, { useState, useEffect } from "react";
import "./Input.css"
const Input = ({ setfirst, editingTask, setEditingTask }) => {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editingTask) {
      setData(editingTask.Task);
      setInput(editingTask.DayTime);
    }
  }, [editingTask]);

  const handleClick = () => {
    if (editingTask) {
      setfirst((prev) =>
        prev.map((item) =>
          item.id === editingTask.id
            ? { ...item, Task: data, DayTime: input }
            : item
        )
      );
      setEditingTask(null);
    } else {
      
      const newData = { id: Date.now(), Task: data, DayTime: input };
      setfirst((prev) => [...prev, newData]);
    }


  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        background: "rgba(84, 187, 104, 0.8)",
      }}
    >
      <div
        style={{
          border: "2px solid black",
          width: "50%",
          height: "300px",
          background: "rgba(18, 119, 220, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ textAlign: "center", marginLeft: "20px" }}>
          {editingTask ? "Edit Task" : "Task Tracker"}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "4px",
            gap: "10px",
            border: "3px solid lightblue",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.75)",
            height: "50%",
            paddingTop: "10px",
          }}
        >
          <label>Task</label>
          <input
            type="text"
            onChange={(e) => setData(e.target.value)}
            value={data}
            style={{ width: "90%" }}
          />

          <label>Day & Time</label>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            style={{ width: "90%" }}
          />
        </div>

        <button
          style={{
            marginTop: "10px",
            color: "white",
            // background: "green",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          {editingTask ? "Save Edit" : "Save Task"}
        </button>
      </div>
    </div>
  );
};

export default Input;
