import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Plans from './Components/Plans/Plans.jsx'
import Teach from './Components/Teach/Teach.jsx'
import Adminlogin from './Components/Adminlogin/Adminlogin.jsx'
import Admindashboard from './Components/Admindashboard/Admindashboard.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Mycourses from './Components/Mycourses/Mycourses.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
  {
   path: "/teach",
    element: <Teach />,
  },
  {
   path: "/adminlogin",
    element: <Adminlogin />,
  },
  {
   path: "/admindashboard",
    element: <Admindashboard />,
  },
  {
   path: "/cart",
    element: <Cart />,
  },
   {
   path: "/mycourses",
    element: <Mycourses />,
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
