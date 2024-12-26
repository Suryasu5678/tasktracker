import React from "react";

const Display = ({ first, setfirst, setEditingTask }) => {
  const close = (id) => {
    setfirst((prev) => prev.filter((item) => item.id !== id));
  };

  const startEditing = (item) => {
    setEditingTask(item);
  };

  return (
    <div style={{ paddingTop: "30px" }}>
      {first.map((item) => (
        <div
          key={item.id}
          style={{
            height: "150px",
            background: "lightgray",
            width: "250px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            margin: "10px",
            color: "black",
            marginBottom: "20px",
            borderRadius: "10px",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.15)",
            background: "black",
            color: "white",
            marginLeft: "10px",
          }}
        >
          <p style={{ marginLeft: "10px" }}>Task: {item.Task}</p>
          <p style={{ marginLeft: "10px" }}>DayTime: {item.DayTime}</p>
          <button
            onClick={() => startEditing(item)}
            style={{
              background: "blue",
              color: "white",
              cursor: "pointer",
              marginTop: "10px",
              borderRadius: "5px",
            }}
          >
            Edit
          </button>
          <button
            onClick={() => close(item.id)}
            style={{
              background: "red",
              color: "white",
              cursor: "pointer",
              marginTop: "10px",
              borderRadius: "5px",
            }}
          >
            Close
          </button>
        </div>
      ))}
    </div>
  );
};

export default Display;
