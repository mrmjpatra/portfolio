import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import Experience from './pages/Experience/Experience'
import Navbar from './components/Navbar';
import ProjectItem from './pages/Project/ProjectItem/ProjectItem'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Project />}></Route>
          <Route path='/projects/:id' element={<ProjectItem />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
