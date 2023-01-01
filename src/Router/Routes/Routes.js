import { createBrowserRouter } from "react-router-dom"
import Appointment from "../../Appointment/Appointment";
import Main from "../../Layout/Main"
import Login from "../../Login/Login";
import Home from "../../Pages/Home/Home/Home"
import Register from "../../Register/Register";
import Reviews from "../../Reviews/Reviews";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
       element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/appointment',
        element:<Appointment></Appointment>
      },
      {
        path:'/reviews',
        element:<Reviews></Reviews>
      }
    ]
    
  }
])

export default router;