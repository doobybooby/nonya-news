import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Blogs } from './components/pages/Blogs';
import { Oped } from './components/pages/Oped';
import { InfoBanner } from './components/utils/InfoBanner';

function App() {
  return (
    <div className="App">
      <InfoBanner />
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/oped' element={<Oped/>} />
      </Routes>
    </div>
  );
}

export default App;
