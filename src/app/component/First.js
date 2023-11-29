import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducers/counter';
import { useState, createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as prjStyles from './style.scss';
const UserContext = createContext();
function First() {
  const [stateCount, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  useEffect(() => {
    document.title = `You clicked ${stateCount} times`;
  });
 // const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <h2>React 16+ Webpack 5+ Boiler Plate</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <button onClick={() => console.log('Hi There')}>
        Console log Press me
      </button>
      <br />
      <br />
      <button onClick={() => setCount(stateCount + 1)}>
        Update State count
      </button>{' '}
      <div>
        From State <span>{stateCount}</span>
      </div>
      <br />
      <br />
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>{' '}
      <button
        aria-label="Increment value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <br />
      <br />
      <div>
        From Redux <span>{count}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Link to="/useStateEffect">Use State Effect</Link>
      <br />
      <Link to="/useReducer">Use Reducer</Link>
      <br />
      <Link to="/useCallback">Use Callback</Link>
      <br />
      <Link to="/useMemo">Use Memo</Link>
      <br />
      <Link to="/reduxexample">ReduxExample</Link>
      <br />
      <Child />
      <Link to="/rotate">Old Redux</Link>
      <br />
    </div>
  );
}

function Child() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <div>
        From Redux Child Component <span>{count}</span>
      </div>
      <br />
      <br />
    </div>
  );
}

export default First;
