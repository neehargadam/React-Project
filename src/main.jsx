import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login/login.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import NetflixIndex from './components/netflix/netflix-index.jsx'
import DataBinding from './components/data-binding/data-binding.jsx'
import DataBindingState from './components/data-binding/data-bindingState.jsx'
import DataBindingMap from './components/data-binding/data-binding-map.jsx'
import DataBindingObject from './components/data-binding/data-binding-Object.jsx'
import DataBindingArray from './components/data-binding/data-binding-Array.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataBindingArray/>
    {/* <DataBindingObject/> */}
   {/* <DataBindingMap/> */}
    {/* <DataBindingState/> */}
    {/* <DataBinding/> */}
    {/* <NetflixIndex /> */}
  </StrictMode>,
)
