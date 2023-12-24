import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Edit from './pages/Edit';
import AddBook from './pages/AddBook';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <main class="py-12 px-6 2xl:px-6 container">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/book/edit/:bookId' element={<Edit/>} />
          <Route path='/book/add' element={<AddBook/>} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
 