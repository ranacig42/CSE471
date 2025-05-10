import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './login';  // Make sure the file is named Login.js
import Signup from './Signup';
import CreateProgram from './components/CreateProgram';
import ProgramList from './components/ProgramList';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EditProgram from './components/EditProgram'; // Import the EditProgram component
import SubmitApplication from './components/submitApplication';
import ApplicationList from './components/ApplicationList'; // Import the ApplicationList component
import DraftApplications from './components/DraftApplications';
import UpdateDraftApplication from './components/UpdateDraftApplication'; // Import the UpdateDraftApplication component
import AskQuestion from './components/AskQuestion';
import About from './About';


import Program01 from './programs/Program01';  
import Program02 from './programs/Program02';
import Program03 from './programs/Program03';
import Program04 from './programs/Program04';
import Program05 from './programs/Program05';
import Program06 from './programs/Program06';
import Program07 from './programs/Program07';

function MainApp() {
  return (
    <Router>
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} /> {/* About Us Route */}

          {/* Program-related Routes */}
          <Route path="/create-program" element={<CreateProgram />} />
          <Route path="/programs" element={<ProgramList />} />
          <Route path="/submit-application" element={<SubmitApplication />} />
          <Route path="/applications" element={<ApplicationList />} /> {/* Application List Route */}
          <Route path="/update-draft/:id" element={<UpdateDraftApplication />} />
          <Route path="/ask-question" element={<AskQuestion />} />


          
          
          {/* Program Pages */}
          <Route path="/programs/program01" element={<Program01 />} />
          <Route path="/programs/program02" element={<Program02 />} />
          <Route path="/programs/program03" element={<Program03 />} />
          <Route path="/programs/program04" element={<Program04 />} />
          <Route path="/programs/program05" element={<Program05 />} />
          <Route path="/programs/program06" element={<Program06 />} />
          <Route path="/programs/program07" element={<Program07 />} />

          {/* Admin Dashboard and Edit Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/edit-program/:id" element={<EditProgram />} /> {/* Parametric Route for EditProgram */}

          {/* Application Routes */}
          <Route path="/drafts" element={<DraftApplications />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default MainApp;
