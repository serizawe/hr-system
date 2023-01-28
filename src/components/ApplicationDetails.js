import React, { useState, useEffect } from "react";
import axios from "axios";

const ApplicationDetails = (props) => {
  const [application, setApplication] = useState({});
  const [interviewDate, setInterviewDate] = useState(null);
  const [interviewTime, setInterviewTime] = useState(null);
  const [interviewNote, setInterviewNote] = useState("");

  
  useEffect(() => {
    axios
      .get(`/api/applications/${props.applicationId}`)
      .then((res) => setApplication(res.data));
  }, []);

  const handleInterviewDateChange = (event) => {
    setInterviewDate(event.target.value);
  };

  const handleInterviewTimeChange = (event) => {
    setInterviewTime(event.target.value);
  };

  const handleInterviewNoteChange = (event) => {
    setInterviewNote(event.target.value);
  };

  const handleOfferInterview = () => {
    axios
      .post(`/api/applications/${props.applicationId}/interviews`, {
        date: interviewDate,
        time: interviewTime,
        note: interviewNote,
      })
      .then((res) => {
        setApplication(res.data);
        setInterviewDate(null);
        setInterviewTime(null);
        setInterviewNote("");
      });
  };

  const handleStartQuiz = () => {
    // navigate to quiz page
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-medium">Application Details</h2>
      <div className="mt-4">
        <div className="text-lg font-medium">Applicant Name:</div>
        <div className="text-gray-700">{application.name}</div>
      </div>
      <div className="mt-4">
        <div className="text-lg font-medium">Applicant Surname:</div>
        <div className="text-gray-700">{application.surname}</div>
      </div>
      <div className="mt-4">
        <div className="text-lg font-medium">Application Status:</div>
        <div className="text-gray-700">{application.status}</div>
      </div>
      {application.interview && (
        <div className="mt-4">
          <div className="text-lg font-medium">Interview:</div>
          <div className="text-gray-700">
            {application.interview.date} {application.interview.time}
          </div>
          <button
            className="bg-blue-500 text-white p-2 mt-2"
            onClick={handleOfferInterview}
          >
            Offer Another Interview
          </button>
          {interviewDate && (
            <div className="mt-4">
                <div className="text-lg font-medium">Interview Date:</div>
              <input
                type="date"
                className="border p-2"
                value={interviewDate}
                onChange={handleInterviewDateChange}
              />
              <div className="text-lg font-medium mt-4">Interview Time:</div>
              <input
                type="time"
                className="border p-2"
                value={interviewTime}
                onChange={handleInterviewTimeChange}
              />
              <div className="text-lg font-medium mt-4">Interview Note:</div>
              <textarea
                className="border p-2"
                value={interviewNote}
                onChange={handleInterviewNoteChange}
              />
              <button
                className="bg-blue-500 text-white p-2 mt-2"
                onClick={handleOfferInterview}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      )}
      {application.quiz && (
        <div className="mt-4">
          <div className="text-lg font-medium">Quiz:</div>
          <div className="text-gray-700">{application.quiz.name}</div>
          <button
            className="bg-blue-500 text-white p-2 mt-2"
            onClick={handleStartQuiz}
          >
            Start the Quiz
          </button>
        </div>
      )}
    </div>
  );
};
export default ApplicationDetails;
