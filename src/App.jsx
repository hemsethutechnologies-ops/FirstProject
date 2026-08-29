import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingChat from './components/FloatingChat'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Courses from './pages/Courses'
import Services from './pages/Services'
import Internships from './pages/Internships'
import Contact from './pages/Contact'
import CourseDetails from './pages/CourseDetails'
import FAQ from './pages/FAQ'
import ApplicationForm from './pages/ApplicationForm'

// Separate Project Pages
import IEEEProjects from './pages/projects/IEEEProjects'
import PythonProjects from './pages/projects/PythonProjects'
import DjangoProjects from './pages/projects/DjangoProjects'
import MLProjects from './pages/projects/MLProjects'
import DataScienceProjects from './pages/projects/DataScienceProjects'
import AIProjects from './pages/projects/AIProjects'
import AndroidProjects from './pages/projects/AndroidProjects'
import JavaProjects from './pages/projects/JavaProjects'
import DotNetProjects from './pages/projects/DotNetProjects'
import AllProjects from './pages/projects/AllProjects'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        
        <div className="main-content" style={{ overflowX: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Subpages */}
            <Route path="/about" element={<About />} />
            <Route path="/about/:tab" element={<About />} />
            
            {/* Projects Subpages (Separate Pages) */}
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/level/:levelId" element={<AllProjects />} />
            <Route path="/projects/ieee" element={<IEEEProjects />} />
            <Route path="/projects/python" element={<PythonProjects />} />
            <Route path="/projects/django" element={<DjangoProjects />} />
            <Route path="/projects/ml" element={<MLProjects />} />
            <Route path="/projects/data-science" element={<DataScienceProjects />} />
            <Route path="/projects/ai" element={<AIProjects />} />
            <Route path="/projects/android" element={<AndroidProjects />} />
            <Route path="/projects/java" element={<JavaProjects />} />
            <Route path="/projects/dotnet" element={<DotNetProjects />} />
            <Route path="/projects/all" element={<AllProjects />} />
            
            {/* Courses Subpages */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/frontend" element={<Courses category="frontend" />} />
            <Route path="/courses/backend" element={<Courses category="backend" />} />
            <Route path="/courses/fullstack" element={<Courses category="fullstack" />} />
            <Route path="/courses/data-science-ai" element={<Courses category="data-science-ai" />} />
            <Route path="/courses/devops" element={<Courses category="devops" />} />
            <Route path="/courses/cybersecurity" element={<Courses category="cybersecurity" />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            
            {/* Services Subpages */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceType" element={<Services />} />
            <Route path="/services/:serviceType/:subServiceType" element={<Services />} />
            
            <Route path="/internships" element={<Internships />} />
            <Route path="/internships/:type" element={<Internships />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about/faq" element={<FAQ />} />
            <Route path="/apply" element={<ApplicationForm />} />
          </Routes>
        </div>

        <Footer />
        <FloatingChat />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  )
}

export default App
