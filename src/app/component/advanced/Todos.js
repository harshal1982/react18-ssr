import React, { memo, useEffect, useRef } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
 const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
	 <br/>
	 <div> Rendering count: {count.current}</div>
    </>
  );
};

export default memo(Todos);