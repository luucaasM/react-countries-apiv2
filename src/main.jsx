import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import { AppContextProvider } from './context/AppContext'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode className="dark:bg-[#202c37]">
    <AppContextProvider>
    <Header />
    <div className='m-auto w-[98%] md:w-[80%]'>
    <App/>
    </div>
    </AppContextProvider>
  </React.StrictMode>,
)
