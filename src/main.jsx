import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './routes/Register.jsx'
import MainPage from './routes/MainPage.jsx'
import ImgForm from './routes/ImgForm.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/register', element: <Register />},
  {path: '/mainPage', element: <MainPage />},
  {path: '/imgForm', element: <ImgForm />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)