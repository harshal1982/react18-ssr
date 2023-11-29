import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from './configureStore';

import App from '../../app/App';
export default (req) => {
  console.log(req.path);
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );
  return `<!DOCTYPE html>  
  <head>
     <link rel="stylesheet" href='/main.css'"/>
     <link rel="icon" type="image/x-icon" href="/images/favicon.ico"> 
  </head>  
  <body> 
    <div id="root">${content}</div>
    <script src="bundle.js" ></script>
  </body>
  </html>`;
};
