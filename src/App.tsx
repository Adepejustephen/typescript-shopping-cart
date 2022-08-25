import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Store } from './pages';

function App() {
  return (
    <div className="container">
    <Header/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/store' element={<Store />} />
     </Routes>
    </div>
  );
}

export default App;
