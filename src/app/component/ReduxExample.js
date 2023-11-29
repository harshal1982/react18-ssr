import React, { useEffect, useRef }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../reducers/todo';
import { Link} from 'react-router-dom';


function ReduxExample() {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);

  useEffect(() => {
    if (todoState.status === 'idle') {
      dispatch(fetchTodos())
    }
  }, [todoState.status, dispatch])

  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  var keyin=0;
  return (
    <div>
      <button onClick={(e) => dispatch(fetchTodos())}>Click</button>
      <h2>Redux Example</h2>
	  <br/><Link to="/">Home</Link>
      {todoState?.isLoading && (
        <>
          <b>Loading....</b>
        </>
      )}
      {todoState?.data?.map((i) => {
		keyin++;
        return <li key={keyin}>{i.title}</li>;

      })}
	  <br/>
	   <div>Render Count: {count.current}</div><br/>
	   <div>TodoStatus: {count.current}</div><br/>
    </div>
  );
}
export default ReduxExample;
