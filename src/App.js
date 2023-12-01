import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Applications from "./pages/Applications/Applications"
import Details from "./pages/Applications/Details"
import Quiz from "./pages/Quiz"
import Tickets from "./pages/Tickets/Tickets"
import TicketDetails from "./pages/Tickets/TicketDetails"
import Registration from "./pages/Registration"
import CreateInterview from "./pages/Interviews/Interview";
import QuizComponent from "./components/SolveQuiz";
import TicketDetail from "./pages/Ticket/TicketDetail";
import TicketList from "./pages/Ticket/TicketList";
import TicketForm from "./pages/Ticket/TicketForm";
import MyApplication from "./pages/Application/ApplicantView";
import ApplicationsList from "./pages/Application/ApplicationList";
import ApplicationDetails from "./pages/Application/ApplicationDetails";
import RequireAuth from './components/RequireAuth';
import Unauthorized from "./components/Unauthorized";
import Password from "./components/Password";
import Forgot from "./components/Forgot";




export default function App() {
 

 

  return (
    <div className=" w-full h-screen bg-white">
      
      <div className=" w-full">
         <Navbar/>
      </div>
      
      <div className="flex mt-20 pl-60 w-11/12 h-3/4">
        <Routes>
          
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/unauthorized" element={<Unauthorized />} /> 
          <Route element={<RequireAuth />}>
            <Route path="/Registration" element={<Registration/>} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/MyApplication" element={<MyApplication/>} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route  path="/" element={<ApplicationsList/>}>
              <Route  path=":id" element={<ApplicationDetails/>} />
            </Route>
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="/Password" element={<Password/>} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/ForgotPassword" element={<Forgot/>} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="/CreateTicket" element={<TicketForm/>} />
          </Route>
          

          <Route element={<RequireAuth />}>
            <Route path="/Tickets" element={<TicketList tickets={testTickets} />} >
              <Route path=":id" element={<TicketDetail tickets={testTickets} />} />
            </Route>
          </Route>

            
            
          <Route element={<RequireAuth />}>
            <Route path="/CreateInterview" element={<CreateInterview/>} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/CreateQuiz" element={<Quiz/>} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/SolveQuiz" element={<QuizComponent/>} />
          </Route>
            
           
          
        </Routes>
      </div>

    </div>
  );
}
