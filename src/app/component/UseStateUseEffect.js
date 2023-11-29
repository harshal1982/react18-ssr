import React, { useState, useEffect, useRef} from 'react';
import { Link} from 'react-router-dom';

function UseStateUseEffect() {
  // State example
  const [color, setColor] = useState('red');

  //Effect example
  const [countnum, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => countnum * 2);
  }, [countnum]);

  //use ref avoid rerender

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    //   "State Example"
    <div style={{ backgroundColor: `${color}` }}>
      Set State Example Color : {color} <br />
      <button type="button" onClick={() => setColor('lightblue')}>
        Blue
      </button>{' '}
      <br />
      <br />
       {/* Effect Example */}
	   <button onClick={() => setCount((c) => c + 1)}>Add</button>
      <p>Calculation: {calculation}</p>

	  {/* UseRef Example */}

	  <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
		id="fortesting"
      />
      <div>Render Count: {count.current}</div><br/>
	  <Link to="/">Home</Link>
    </div>
  );
}
export default UseStateUseEffect;
