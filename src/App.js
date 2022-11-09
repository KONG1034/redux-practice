import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import {WordList} from './components/WordList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/:day" element={<WordList/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
