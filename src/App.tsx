import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import Glabels from './pages/Glades';
import HomeButton from './components/HomeButton';

const App = () => {
  
  return (
    <div className='app'>
      <div className='background' />
      <BrowserRouter>
        <HomeButton />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/game1" element={<Glabels />} />
        </Routes>
      </BrowserRouter>
      <div className='footer'>
        Автор игры: учитель-логопед Ковязина С. Е.
      </div>
    </div>
  )
}

export default App