import React, { useEffect } from 'react'
import Login from './login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';




function Body() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    }, {
      path: "/browser",
      element: <Browser />
    }
  ]);

  


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
