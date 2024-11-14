import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Details from './detailsRoute/Details.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/details",
    element: <Details></Details>,
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
