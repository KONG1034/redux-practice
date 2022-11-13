import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header} from './components/Header';
import {Word} from './components/Word';
import { WordCreate } from './components/WordCreate';
import { DayCreate } from './components/DayCreate';
import { WordUpdate } from './components/WordUpdate';
import { DayDelete } from './components/DayDelete';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/:day" element={<Word/>} />
          <Route path="/update" element={<WordUpdate/>} />
          <Route path="/createWord" element={<WordCreate/>} />
          <Route path="/createDay" element={<DayCreate/>} />
          <Route path="/deleteDay" element={<DayDelete/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
