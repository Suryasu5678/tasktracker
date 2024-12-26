import React, { useState } from "react";
import Input from "./Input";
import Display from "./Display";

const App = () => {
  const [first, setfirst] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      <Input
        setfirst={setfirst}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <Display
        first={first}
        setfirst={setfirst}
        setEditingTask={setEditingTask}
      />
    </div>
  );
};

export default App;
