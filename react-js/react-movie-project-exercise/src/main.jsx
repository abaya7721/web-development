import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import ReactRouterApp from "./ReactRouterApp.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <ReactRouterApp/>
    </StrictMode>,
)
