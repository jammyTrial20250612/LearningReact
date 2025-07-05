import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RenderingProvider, UseContextCounterProvider } from './context/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UseContextCounterProvider>
      <RenderingProvider>
        <App />
      </RenderingProvider>
    </UseContextCounterProvider>
  </StrictMode>,
)
