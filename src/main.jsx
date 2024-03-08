import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './utils/css/Fixed.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
