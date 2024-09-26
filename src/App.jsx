import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    
      <Router>
        <div className='App'>
      <NavBar />
       <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path="/category/:category" element={<ItemListContainer />} />
      </Routes>
      <ItemListContainer />
      </div>
      </Router>
  );
}
export default App