import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectTable from './ProjectTable';
import SideNavigation from './SideNav';
import TopNavigation from './TopNav';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Project from './Project';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Project />}/>
        <Route path="/projects" element={<Project />}/>
        <Route path="/projects/:project_id" element={<Project />} />
      </Routes>
  );
}

export default App;
