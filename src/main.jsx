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
import DataBindingDateExample from './components/data-binding/data-binding-date-example.jsx'
import DataBindingJson from './components/data-binding/data-binding-json.jsx'
import DataBindingAxiosExample from './components/data-binding/data-binding-axios-example.jsx'
import EventBinding from './components/event-binding/event-binding.jsx'
import BubblingEventExample from './components/event-binding/bubbling-EventExample.jsx'
import ReactTwoWayBindingExample from './components/event-binding/ReactTwoWayBindingExample.jsx'
import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx'
import { MouseAnimation } from './components/mouse-animation/mouse-animation.jsx'
import { MouseMove } from './components/mouse-move/mouse-move.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MouseMove/>
    {/* <MouseAnimation/> */}
    {/* <MouseDemo/> */}
    {/* <ReactTwoWayBindingExample/> */}
    {/* <BubblingEventExample/> */}
    {/* <EventBinding/> */}
    {/* <DataBindingAxiosExample/> */}
    {/* <DataBindingJson/> */}
    {/* <DataBindingDateExample /> */}
    {/* <DataBindingArray/> */}
    {/* <DataBindingObject/> */}
   {/* <DataBindingMap/> */}
    {/* <DataBindingState/> */}
    {/* <DataBinding/> */}
    {/* <NetflixIndex /> */}
  </StrictMode>,
)
