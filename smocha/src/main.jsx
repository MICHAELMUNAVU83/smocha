import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Paymentinfo from './page/PaymentInfo.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/payment",
    element: <Paymentinfo />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={paths} />
  </StrictMode>
)


