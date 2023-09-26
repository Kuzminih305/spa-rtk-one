import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from './App'
import ThemeProvider from "@/theme/theme-provider.tsx";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>

    </StrictMode>
)