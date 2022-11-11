import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import {WordList} from './components/WordList';
import { WordUpdate } from './components/WordUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/:day" element={<WordList/>} />
          <Route path="/update" element={<WordUpdate/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
