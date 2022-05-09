import React, { ComponentType, lazy, LazyExoticComponent, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import Glabels from './pages/Glabels';
import HomeButton from './components/HomeButton';
import AnimalsCount from './pages/AnimalsCount';
import Tenderly from './pages/Tenderly';
import Family from './pages/Family';
import OneMany from './pages/OneMany';
import AnswerFairy from './components/AnswerFairy';
import AlertState from './context/alert/AlertState';
import FinalPage from './pages/FinalPage';
import './app.scss';

interface IExtendedLazyExoticComponent extends LazyExoticComponent<ComponentType<any>> {
  preload?: () => Promise<{ default: ComponentType<any>; }>;
}

function lazyWithPreload(factory: () => Promise<{ default: ComponentType<any> }>) {
  const Component: IExtendedLazyExoticComponent = lazy(factory);
  Component.preload = factory;
  return Component;
}

const App = () => {

  useEffect(() => {
    const Glabels = lazyWithPreload(() => import('./pages/Glabels'));
    console.log(Glabels.preload )
    Glabels.preload && Glabels.preload();
    const Tenderly = lazyWithPreload(() => import('./pages/Tenderly'));
    Tenderly.preload && Tenderly.preload();
    const Family = lazyWithPreload(() => import('./pages/Family'));
    Family.preload && Family.preload();
    const OneMany = lazyWithPreload(() => import('./pages/OneMany'));
    OneMany.preload && OneMany.preload();
    const FinalPage = lazyWithPreload(() => import('./pages/FinalPage'));
    FinalPage.preload && FinalPage.preload();
  }, [])

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