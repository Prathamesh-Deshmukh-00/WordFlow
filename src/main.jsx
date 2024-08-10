import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from './store/Store.js'
import Home from  './Pages/Home.jsx'
import {Protected , Login} from './components/index.js'
import { Provider } from 'react-redux'


import AddPost from './Pages/AddPost.jsx';
import SignUp from './Pages/SignUp.jsx';
import EditPost from './Pages/EditPost.jsx';
import Post from './Pages/Post.jsx';
import AllPost from './Pages/AllPost.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Home/>

      },
      {
        path : '/login',
        element : (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path : '/signup',
        element : (
          <Protected authentication={false}>
            <SignUp />
          </Protected>
        )
      },
      {
        path : '/all-posts',
        element : (
          <Protected authentication>
            {" "}
            <AllPost />
          </Protected>
        )
      },
      {
        path : "/edit-post/:slug",
        element : (
          <Protected authentication>
            {" "}
            <AddPost/>
          </Protected>
        )
      },
      {
        path : "/edit-post/:slug",
        element : (
          <Protected authentication>
            {" "}
            <EditPost />
          </Protected>
        )
      },
      {
        path: "/post/:slug",
        element: <Post />,
    },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
