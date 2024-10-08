import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from '../src/components/pages/error'
import Mainpage from './components/pages/main';
import Game from './components/pages/game';

const routes = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <Error/>,
    children : [
      {
        path: '/',
        element: <Mainpage/>,
        errorElement: <Error />
      },
      {
        path : '/game/leaderboard',
        
      },
      {
        path : '/game/play',
        element : <Game/>,
        errorElement : <Error/>
      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
