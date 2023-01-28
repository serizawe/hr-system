import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApplicationDetails = ({ id }) => {
    // state to hold the application details
    const [application, setApplication] = useState({});
    // state to hold the new status
    const [newStatus, setNewStatus] = useState("");
    // state to hold the assigned quiz
    const [assignedQuiz, setAssignedQuiz] = useState("");
    // state to show/hide the quiz list
    const [showQuizList, setShowQuizList] = useState(false);
    // state to hold all quizzes
    const [quizzes, setQuizzes] = useState([]);
    // state to hold feedback
    const [feedback, setFeedback] = useState("");
    // state to show/hide feedback textarea
    const [showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        // use axios to fetch the application details from the back-end
        axios.get(`/api/applications/${id}`)
            .then(res => {
                setApplication(res.data);
            })
            .catch(err => {
                console.error(err);
            });

        // use axios to fetch all quizzes from the back-end
        axios.get(`/api/quizzes`)
            .then(res => {
                setQuizzes(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    // function to handle the change status button click
    const handleChangeStatusClick = () => {
        // send a PUT request to the back-end to update the application status
        axios.put(`/api/applications/${id}`, { status: newStatus })
            .then(res => {
                setApplication(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    // function to handle the assign quiz button click
    const handleAssignQuizClick = () => {
        setShowQuizList(!showQuizList);
    }

    // function to handle the quiz selection
    const handleQuizSelection = (quiz) => {
        setAssignedQuiz(quiz);
        setShowQuizList(false);
        // send a PUT request to the back-end to update the assigned quiz
        axios.put(`/api/applications/${id}`, { assignedQuiz: quiz })
            .then(res => {
                setApplication(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    const handleFeedbackChange = (e) => {
        if (application.feedback !== null) {
        setFeedback(e.target.value);
        }
        else setFeedback(e.target.value);
    }

    const handleGiveFeedbackClick = () => {
        setShowFeedback(!showFeedback);
    }

    const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // send a PUT request to the back-end to update the feedback
    axios.put(`/api/applications/${id}`, { feedback: feedback })
        .then(res => {
            setApplication(res.data);
            setFeedback("");
            setShowFeedback(false);
        })
        .catch(err => {
            console.error(err);
        });
}


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Application Details</h1>
            <div className="bg-white p-4">
                <p className="mb-2">Applicant Name: {application.name}</p>
                <p className="mb-2">Applicant Surname: {application.surname}</p>
                <p className="mb-2">Application Status: {application.status} </p>
                <p className="mb-2">Assigned Quiz: {application.assignedQuiz}</p>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="status">Change status:</label>
                    <select className="border p-2" id="status" onChange={(e) => setNewStatus(e.target.value)}>
                        <option value=""></option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4" onClick={handleChangeStatusClick}>Change</button>
                </div>
                <div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4" onClick={handleAssignQuizClick}>Assign Quiz</button>
                    {showQuizList && (
                        <div className="bg-white py-4 px-2 rounded-lg">
                            <h3 className="text-lg font-medium mb-4">Select Quiz</h3>
                            <ul>
                                {quizzes.map(quiz => (
                                    <li key={quiz._id} className="mb-2">
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={() => handleQuizSelection(quiz)}>{quiz.name}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div>
                    {application.feedback && 
                        <div>
                            <label>Feedback: </label>
                            <span>{application.feedback}</span>
                        </div>
                    }
                    <button onClick={handleGiveFeedbackClick}>Give Feedback</button>
                    {
                        showFeedback &&
                        <div>
                            <textarea value={feedback} onChange={handleFeedbackChange} />
                            <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
export default ApplicationDetails;