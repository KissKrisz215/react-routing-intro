import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import {AboutPage} from './pages/AboutPage'
import {ErrorPage} from './pages/ErrorPage'
import {Navbar} from './components/Navbar'
import { ProjectDetailsPage } from './components/ProjectDetailsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { HomePageWithNavigate } from './components/HomePageWithNavigate';
import { Routes, Route } from 'react-router-dom';
import projectsData from "./projects-data.json";

function App() {
  return (
    <div className="App">
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<HomePageWithNavigate />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
      <Route path="/projects/:projectId" element={<ProjectDetailsPage />}></Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
  );
}

export default App;
