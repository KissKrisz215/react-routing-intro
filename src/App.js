import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import {AboutPage} from './pages/AboutPage'
import {ErrorPage} from './pages/ErrorPage'
import {Navbar} from './components/Navbar'
import { ProjectDetailsPage } from './components/ProjectDetailsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { HomePageWithNavigate } from './components/HomePageWithNavigate';
import { ProductDetailsPage } from './components/ProductDetailsPage';
import { ProductsPage } from './components/ProductsPage';
import { QueryStringExample } from './components/QueryStringExample';
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
      <Route path="/products" element={<ProductDetailsPage />}></Route>
      <Route path="/products/:productId" element={<ProductsPage />}></Route>
      <Route path="example" element={<QueryStringExample />}></Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
  );
}

export default App;
