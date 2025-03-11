import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Components/Home';
import Login from './Components/Login';
import LoginPage from './Components/LoginPage';
import CompanyLoginPage from './Components/CompanyLoginPage';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import JobPosting from './Components/JobPosting';
import CandidateScreening from './Components/CandidateScreening';

import SelectedCandidate from './Components/SelectedCandidate';
import InterviewReport from './Components/InterviewReport';
import ResumeAnalysis from './Components/ResumeAnalysis';


function App() {
  

  return (
    <BrowserRouter>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/loginPage" element={<LoginPage/>}/>
      <Route path="/companylogin" element={<CompanyLoginPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/jobposting" element={<JobPosting/>}/>
      <Route path="/candidatescreening" element={<CandidateScreening/>}/>
      <Route path="/resumeanalysis" element={<ResumeAnalysis/>}/>
      <Route path="/selectedcandidate" element={<SelectedCandidate/>}/>
      <Route path="/interviewreport" element={<InterviewReport/>}/>






      
     </Routes>
    </BrowserRouter>
  )
}

export default App
