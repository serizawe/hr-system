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
import ApplicationDetailss from "./components/ApplicationDetails";
import MyApplication from "./pages/Application/ApplicantView";
import ApplicationsList from "./pages/Application/ApplicationList";
import ApplicationDetails from "./pages/Application/ApplicationDetails";





export default function App() {
 

  const testTickets = [
{
_id: '1',
title: 'Ticket 1',
description: 'This is a sample ticket',
userName: 'John',
userSurname: 'Doe',
date: '2022-01-01',
replies: [
{
_id: '1',
text: 'This is a sample reply',
userName: 'Jane',
userSurname: 'Doe',
date: '2022-01-02'
},
{
_id: '2',
text: 'This is another sample reply',
userName: 'Bob',
userSurname: 'Smith',
date: '2022-01-03'
}
]
},
{
_id: '2',
title: 'Ticket 2',
description: 'This is another sample ticket',
userName: 'Jane',
userSurname: 'Smith',
date: '2022-01-05',
replies: [
{
_id: '3',
text: 'This is a reply to Ticket 2',
userName: 'Bob',
userSurname: 'Smith',
date: '2022-01-06'
},
{
_id: '4',
text: 'This is another reply to Ticket 2',
userName: 'John',
userSurname: 'Doe',
date: '2022-01-07'
}
]
}
];




  const quiz = {
  id: 1,
  name: "Test Quiz",
  time: 60,
  questions: [
    {
      id: 1,
      text: "What is the capital of France?",
      options: [
        { id: 1, text: "Paris" },
        { id: 2, text: "London" },
        { id: 3, text: "Rome" },
        { id: 4, text: "New York" }
      ]
    },
    {
      id: 2,
      text: "Who is the current president of the United States?",
      options: [
        { id: 1, text: "Joe Biden" },
        { id: 2, text: "Donald Trump" },
        { id: 3, text: "Barack Obama" },
        { id: 4, text: "George W. Bush" }
      ]
    },
    {
      id: 3,
      text: "What is the currency of Japan?",
      options: [
        { id: 1, text: "Yen" },
        { id: 2, text: "Euro" },
        { id: 3, text: "Dollar" },
        { id: 4, text: "Pound" }
      ]
    },
    {
      id: 4,
      text: "What is the name of the famous painting by Leonardo da Vinci?",
      options: null
    }
  ]
};
const testData = {
  applicationId: "123",
  name: "John",
  surname: "Doe",
  status: "pending",
  interview: {
    date: "2022-05-01",
    time: "15:00"
  },
  quiz: {
    name: "JavaScript Fundamentals"
  }
}
const applications = [
  {
    id: 1,
    applicantName: 'John',
    applicantSurname: 'Doe',
    status: 'in progress',
    interviews: [
      {
        id: 1,
        date: '01/01/2022',
        time: '10:00 AM',
        note: 'Interview with HR'
      },
      {
        id: 2,
        date: '01/02/2022',
        time: '2:00 PM',
        note: 'Interview with Manager'
      }
    ],
    quizzes: [
      {
        id: 1,
        name: 'Quiz 1',
        time: '1 hour'
      },
      {
        id: 2,
        name: 'Quiz 2',
        time: '30 minutes'
      }
    ],
    feedback: [
      {
        id: 1,
        feedback: "good"
      },
      {
        id: 2,
        feedback: "great"
      }
    ]
  },
  {
    id: 2,
    applicantName: 'Jane',
    applicantSurname: 'Doe',
    status: 'hired',
    interviews: [
      {
        id: 1,
        date: '01/01/2022',
        time: '10:00 AM',
        note: 'Interview with HR'
      },
      {
        id: 2,
        date: '01/02/2022',
        time: '2:00 PM',
        note: 'Interview with Manager'
      }
    ],
    quizzes: [
      {
        id: 1,
        name: 'Quiz 1',
        time: '1 hour'
      },
      {
        id: 2,
        name: 'Quiz 2',
        time: '30 minutes'
      }
    ],
    feedback: [
      {
        id: 1,
        feedback: "good"
      },
      {
        id: 2,
        feedback: "great"
      }
    ]
  }
];

  return (
    <div className=" w-full h-screen bg-white">
      <div className=" w-1/6">
        <Navbar/>
      </div>
      <div className="flex mt-20 pl-60 w-11/12 h-3/4">
        <Routes>
        <Route  path="/" element={<Applications/>}>
           <Route  path="Details/:id" element={<Details/>} />
        </Route>
        <Route path="/create-ticket" element={<TicketForm/>} />
        <Route path="/Tickets" element={<TicketList tickets={testTickets} />} >
          <Route path=":id" element={<TicketDetail tickets={testTickets} />} />
        </Route>
        <Route path="/Registration" element={<Registration/>} />

        <Route path="/Interview" element={<CreateInterview/>} />
        <Route path="/Quiz" element={<Quiz/>} />
        <Route path="/QuizSolve" quiz={quiz} element={<QuizComponent/>} />
        <Route  path="/ApplicationDetails" element={<ApplicationDetails  application={testData[0]} />}></Route> 
        <Route  path="/ApplicationList" element={<ApplicationsList  applications={testData}  />}></Route> 
        
        </Routes>
      </div>

    </div>
  );
}