
import './App.css';
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Navbar from './component/pages/layout/Navbar'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Contact/>
    </div>
  );
}

export default App;
