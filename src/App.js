import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header} from './components/Header';
import {Word} from './components/Word';
import { WordCreate } from './components/WordCreate';
import { WordUpdate } from './components/WordUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/:day" element={<Word/>} />
          <Route path="/update" element={<WordUpdate/>} />
          <Route path="/create" element={<WordCreate/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
