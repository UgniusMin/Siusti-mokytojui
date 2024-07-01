import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './routes/Register.jsx'
import Login from './routes/Login.jsx'
import MainPage from './routes/MainPage.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/register', element: <Register />},
  {path: '/login', element: <Login />},
  {path: '/mainPage', element: <MainPage />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)