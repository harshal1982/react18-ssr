import React from 'react';
import { Route, Routes } from 'react-router-dom';
import First from './component/First';
import ReduxExample from './component/ReduxExample';
import Header from './component/Header';
import Footer from './component/Footer';
import UseStateUseEffect from './component/UseStateUseEffect';
import UseReducerComp from './component/UseReducer';
import CallbackComp from './component/advanced/CallbackComp';
import UseMemoComp from './component/advanced/UseMemo';
import Rotate from './component/old-style/Rotate';

import { useRoutes } from 'react-router-dom';

export default () =>{
	return (
		    <div className='bodywrapper'>
			<Header />
			<Routes>
			<Route exact path="/" element={<First />} />
			<Route exact path="/reduxexample" element={<ReduxExample />} />
			<Route exact path="/useStateEffect" element={<UseStateUseEffect />} />
			<Route exact path="/useReducer" element={<UseReducerComp />} />
			<Route exact path="/useCallback" element={<CallbackComp />} />
			<Route exact path="/useMemo" element={<UseMemoComp />} />
			<Route exact path="/rotate" element={<Rotate />} />

			</Routes>
			<Footer />
		</div>
	)
}
/* Comment above and uncomment below to use useRoutes style 
export default () =>{
  let element = useRoutes([
    {
      path: '/',
      element: <First />,
    },
    { path: '/reduxexample', element: <ReduxExample /> },
  ]);

  return (
			    <div className='bodywrapper'>
				<Header />
				{element}
				<Footer />
			 </div>
  )
  
}*/
