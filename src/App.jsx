import { useState } from 'react';
import Player from './components/Player.jsx';
import './App.css'

function App() {
  return (
    <div className='container'>
      <Player initialName='Player One' />
      <Player initialName='Player Two' />
    </div>
  )
}

export default App
