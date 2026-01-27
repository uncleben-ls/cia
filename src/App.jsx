import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Enroll from './pages/Enroll';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <Router>
      {/* This div is the "Master Container". 
        Adding 'bg-white' here ensures you don't have a blank background.
      */}
      <div className="flex flex-col min-h-screen bg-white">
        
        <Navbar />

        {/* IMPORTANT: The pt-24 (padding-top) prevents the 
          Navbar from covering your content.
        */}
        <main className="flex-grow pt-24 md:pt-32">
          <Routes>
            {/* STUDENT FACING} */}
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            {/* STAFF FACING */}
            <Route path="/staff-login" element={<Login />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />     
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;