import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {Provider} from 'react-redux'
import {store} from "./store";

import "./index.css"
import {ThemeProvider} from "./context/ThemeContext.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
)
