import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';


// Main Pages

import App from './Routes/App';
import Login from './Routes/Login';
import Register from './Routes/Register';
import ErrorPage from './Routes/ErrorPage';


// Dashboard pages

import Layout from './Routes/Auth/Dashboard/Layout';
import AiFriend from './Routes/Auth/Dashboard/views/AiFriend'
import BetterEmail from './Routes/Auth/Dashboard/views/BetterEmail'
import ComposeAnything from './Routes/Auth/Dashboard/views/ComposeAnything'
import TransformText from './Routes/Auth/Dashboard/views/TransformText'

// All templates pages

import AllTemplates from './Routes/Auth/Dashboard/views/Templates/AllTemplates';
import BlogCompose from './Routes/Auth/Dashboard/views/Templates/BlogCompose';
import BlogSection from './Routes/Auth/Dashboard/views/Templates/BlogSection';
import ColdEmail from './Routes/Auth/Dashboard/views/Templates/ColdEmail'
import ContentList from './Routes/Auth/Dashboard/views/Templates/ContentList';
import EmailResponder from './Routes/Auth/Dashboard/views/Templates/EmailResponder'
import Essay from './Routes/Auth/Dashboard/views/Templates/Essay';
import JobDescription from './Routes/Auth/Dashboard/views/Templates/JobDescription';
import Rephrase from './Routes/Auth/Dashboard/views/Templates/Rephrase'
import ShortStory from './Routes/Auth/Dashboard/views/Templates/ShortStory';
import Summarize from './Routes/Auth/Dashboard/views/Templates/Summarize'
import InstagramCaption from './Routes/Auth/Dashboard/views/Templates/InstagramCaption';
import Translate from './Routes/Auth/Dashboard/views/Templates/Translate'
import Tweet from './Routes/Auth/Dashboard/views/Templates/Tweet';
import Profile from './Routes/Auth/Profile';

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
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'profile',
    element: <Profile></Profile>
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
          path: 'template/all-templates',
          element: <AllTemplates />
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
        {
          path: 'template/cold-email',
          element: <ColdEmail></ColdEmail>
        },
        {
          path: 'template/translate',
          element: <Translate></Translate>
        },
        {
          path: 'template/summarize',
          element: <Summarize></Summarize>
        },
        {
          path: 'template/email-responder',
          element: <EmailResponder></EmailResponder>
        },
        {
          path: 'template/rephrase',
          element: <Rephrase></Rephrase>
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
