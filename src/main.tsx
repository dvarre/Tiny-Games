import "./init"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WebSocketProvider } from './components/WebSocketProvider.tsx'
import { RouterProvider } from "react-router-dom"
import router from "./routes/router.tsx"
import './tailwind.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebSocketProvider>
        <RouterProvider router={router}/>
    </WebSocketProvider>
  </StrictMode>,
)