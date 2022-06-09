
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React from 'react'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Navbar from './component/pages/layout/Navbar'
import PageNotFound from './component/pages/PagesNotFound'
import Adduser from './component/pages/users/Adduser'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/React-CRUD-APP" element={<Home/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>
          <Route path="/user/add" element={<Adduser/>}>
          </Route>
          <Route path="*" element={<PageNotFound/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
