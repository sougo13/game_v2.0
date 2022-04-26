import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMenu from './pages/MainMenu/MainMenu';

const App = () => {
  return (
    <div className='app'>
      <div className='background' />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
        </Routes>
      </BrowserRouter>
      <div className='footer'>
        Автор игры: учитель-логопед Ковязина С. Е.
      </div>
    </div>
  )
}

export default App