import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Routes/App';
import Login from './Routes/Auth/Login';
import ErrorPage from './Routes/ErrorPage';
import AiFriend from './Routes/Auth/Dashboard/Pages/AiFriend';
import BetterEmail from './Routes/Auth/Dashboard/Pages/BetterEmail'
import ComposeAny from './Routes/Auth/Dashboard/Pages/ComposeAnything'
import TransformText from './Routes/Auth/Dashboard/Pages/TransformText'
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'aifriend',
    element: <AiFriend></AiFriend>
  },

  {
    path: 'aifriend/betteremail',
    element: <BetterEmail></BetterEmail>
  },
  {
    path: 'aifriend/compose',
    element: <ComposeAny></ComposeAny>
  },
  {
    path: 'aifriend/transform',
    element: <TransformText></TransformText>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
