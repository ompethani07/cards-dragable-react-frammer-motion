import React from 'react';
import Foreground from "./components/Foreground";
import "./index.css"
import Background from "./components/Background";
const App = () => {
  return (
    <div className='relative text-white w-full h-screen bg-slate-800'>
    <Background/>
    <Foreground/>
    </div>
  )
}
export default App
