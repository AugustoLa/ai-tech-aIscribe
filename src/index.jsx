import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Routes/App';
import Login from './Routes/Login';
import ErrorPage from './Routes/ErrorPage';

import './index.css';

import Layout from './Routes/Auth/Dashboard/Layout';
import AiFriend from './Routes/Auth/Dashboard/views/AiFriend'
import BetterEmail from './Routes/Auth/Dashboard/views/BetterEmail'
import ComposeAnything from './Routes/Auth/Dashboard/views/ComposeAnything'
import TransformText from './Routes/Auth/Dashboard/views/TransformText'
import BlogCompose from './Routes/Auth/Dashboard/views/Templates/BlogCompose';
import BlogSection from './Routes/Auth/Dashboard/views/Templates/BlogSection';
import ContentList from './Routes/Auth/Dashboard/views/Templates/ContentList';
import Essay from './Routes/Auth/Dashboard/views/Templates/Essay';
import JobDescription from './Routes/Auth/Dashboard/views/Templates/JobDescription';
import ShortStory from './Routes/Auth/Dashboard/views/Templates/ShortStory';
import InstagramCaption from './Routes/Auth/Dashboard/views/Templates/InstagramCaption';
import Tweet from './Routes/Auth/Dashboard/views/Templates/Tweet';

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
    path: '/',
    element: <Layout></Layout>,
    children:
      [
        {
          path: 'aifriend',
          element: <AiFriend />
        },
        {
          path: 'better-email',
          element: <BetterEmail />
        },
        {
          path: 'compose-anything',
          element: <ComposeAnything />
        },
        {
          path: 'transform-text',
          element: <TransformText />
        },
        {
          path: 'template/blog-composer',
          element: <BlogCompose></BlogCompose>
        },
        {
          path: 'template/blog-section',
          element: <BlogSection></BlogSection>
        },
        {
          path: 'template/content-list',
          element: <ContentList></ContentList>
        },
        {
          path: 'template/essay',
          element: <Essay></Essay>
        },
        {
          path: 'template/instagram-caption',
          element: <InstagramCaption></InstagramCaption>
        },
        {
          path: 'template/job-description',
          element: <JobDescription></JobDescription>
        },
        {
          path: 'template/short-story',
          element: <ShortStory></ShortStory>
        },
        {
          path: 'template/tweet',
          element: <Tweet></Tweet>
        },
      ]
  },


]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
