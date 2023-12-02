import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

const MyApplication = ({ id }) => {
// state to hold the application details
const [application, setApplication] = useState({});
// state to hold the new date and time for the interview
const [newInterview, setNewInterview] = useState({});
// state to show/hide the interview date and time input
const [showInterviewInput, setShowInterviewInput] = useState(false);
// state to hold feedback
const [feedback, setFeedback] = useState("");


useEffect(() => {
    // fetch the application details from the back-end
    axios.get(`/api/applications/${id}`)
        .then(res => {
            setApplication(res.data);
        })
        .catch(err => {
            console.error(err);
        });
}, [id]);

// function to handle the change interview date and time button click
const handleChangeInterviewClick = () => {
    setShowInterviewInput(!showInterviewInput);
}

// function to handle the new interview date and time input change
const handleInterviewChange = (e) => {
    setNewInterview({
        ...newInterview,
        [e.target.name]: e.target.value
    });
}

// function to handle the new interview date and time submit
const handleInterviewSubmit = (e) => {
    e.preventDefault();
    // PUT request to the back-end to update the interview date and time
    axios.put(`/api/applications/${id}`, { interview: newInterview })
        .then(res => {
            setApplication(res.data);
        })
        .catch(err => {
            console.error(err);
        });
}

return (
    <div>
        <h2>My Application</h2>
        <div>
            <label>Name: </label>
            <span>{application.name}</span>
        </div>
        <div>
            <label>Surname: </label>
            <span>{application.surname}</span>
        </div>
        <div>
            <label>Status: </label>
            <span>{application.status}</span>
        </div>
        {
            application.interview &&
            <div>
                <div>
                    <label>Interview Date: </label>
                    <span>{application.interview.date}</span>
                </div>
                <div>
                    <label>Interview Time: </label>
                    <span>{application.interview.time}</span>
                </div>
                <div>
                    <label>Interview Note: </label>
                    <span>{application.interview.note}</span>
                </div>
                <button onClick={handleChangeInterviewClick}>Change Interview Date and Time</button>
                {
                    showInterviewInput &&
                    <form onSubmit={handleInterviewSubmit}>
                        <label>New Interview Date: </label>
                        <input type="date" name="date" value={newInterview.date} onChange={handleInterviewChange} />
                        <label>New Interview Time: </label>
                        <input type="time" name="time" value={newInterview.time} onChange={handleInterviewChange} />
                        <label>New Interview Note: </label>
                        <input type="text" name="note" value={newInterview.note} onChange={handleInterviewChange} />
                        <button type="submit">Submit</button>
                    </form>
               }
            </div>
           }
            {
            application.quiz &&
            <div>
                <button onClick={() => {('/test/${application.quiz.id}')}}>Take Test</button>
            </div>
            }
            {
            application.feedback &&
            <div>
                <label>Feedback: </label>
                <span>{application.feedback}</span>
            </div>
            }
    </div>
);
}

export default MyApplication;
