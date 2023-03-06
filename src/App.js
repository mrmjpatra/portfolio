import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import Experience from './pages/Experience/Experience'
import Navbar from './components/Navbar';
import ProjectItem from './pages/Project/ProjectItem/ProjectItem'
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='navbar-container'>
             <Navbar />
        </div>
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Project />}></Route>
          <Route path='/projects/:id' element={<ProjectItem />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
