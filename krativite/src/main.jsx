import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MYAPP() {
    return (
       <h1>hii krati!</h1>
    )
}

createRoot(document.getElementById('root')).render(
    <>
    <App/>
    <MYAPP/>
    </>
)
