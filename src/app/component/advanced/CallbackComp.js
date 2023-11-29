import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";
import { Link} from 'react-router-dom';

const CallbackComp = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
	  <br/><Link to="/">Home</Link>
    </>
  );
};
export default CallbackComp;