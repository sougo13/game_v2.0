import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import Glabels from './pages/Glades';
import HomeButton from './components/HomeButton';
import AnimalsCount from './pages/AnimalsCount';
import Tenderly from './pages/Tenderly';
import Family from './pages/Family';
import OneMany from './pages/OneMany';
import AnswerFairy from './components/AnswerFairy';
import AlertState from './context/alert/AlertState';
import FinalPage from './pages/FinalPage';
import './app.scss';

const App = () => {
  
  return (
    <div className='app'>
      <div className='background' />
      <AlertState>
        <BrowserRouter>
          <AnswerFairy />
          <HomeButton />
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/glabels" element={<Glabels />} />
            <Route path="/animalscount" element={<AnimalsCount />} />
            <Route path="/tenderly" element={<Tenderly />} />
            <Route path="/family" element={<Family />} />
            <Route path="/onemany" element={<OneMany />} />
            <Route path="/final" element={<FinalPage />} />
          </Routes>
        </BrowserRouter>
      </AlertState>
      <div className='footer'>
        Автор игры: учитель-логопед Ковязина С. Е.
      </div>
    </div>
  )
}

export default App