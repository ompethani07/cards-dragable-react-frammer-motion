import React from 'react';
import Background from './components/background'
import Foreground from './components/foreground';
import "./index.css"
import "./app.css"
const App = () => {
  return (
    <div className='relative text-white w-full h-screen bg-slate-800'>
    <Background/>
    <Foreground/>
    </div>
  )
}
export default App
