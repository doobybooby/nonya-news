import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Blogs } from './components/pages/Blogs';
import About from './components/pages/About';
import { Footer } from './components/utils/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
