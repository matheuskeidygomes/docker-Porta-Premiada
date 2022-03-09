import React from 'react';
import Game from './pages/game/index';
import Home from './pages/home/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    return <>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/game/:door/:present" element={<Game />} />

        </Routes>

      </BrowserRouter>

    </>

}

export default App;
