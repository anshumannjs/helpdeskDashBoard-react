import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthPage from './routes/auth.jsx'
import DashBoard from './routes/DashBoard.jsx'
import NewTicketForm from './routes/NewTicketForm.jsx'
import TicketList from './routes/TicketList.jsx'
import UserProfile from './routes/UserProfile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />
      },
      {
        path: "newTicket",
        element: <NewTicketForm />
      },
      {
        path: "ticketList",
        element: <TicketList />
      },
      {
        path: "userProfile",
        element: <UserProfile />
      }
    ]
  },
  {
    path: "auth",
    element: <AuthPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
