import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Routes/App';
import Login from './Routes/Login';
import ErrorPage from './Routes/ErrorPage';
import Layout from './Routes/Auth/Dashboard/Layout';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App ></App>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'aifriend/*',
    element: <Layout></Layout>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
