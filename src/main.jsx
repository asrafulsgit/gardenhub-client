import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'

import Router from './routes/Router'
import { AuthProvider } from './config/AuthProvider'

createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
  </>,
)
