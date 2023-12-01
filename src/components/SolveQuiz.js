import React, { useState, useEffect } from "react";
import axios from "axios";

const QuizComponent = () => {
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(6000);
  

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timeLeft]);

  const handleOptionChange = event => {
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleFinish = () => {
    localStorage.setItem("answers", answers )
    /* 
    axios
      .post("http://api/quiz", { answers: answers })
      .then(response => {
        console.log(response);
      }); */
  };

  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <div className="w-full max-w-lg">
        <h1 className="text-center text-2xl font-medium">{quiz.name}</h1>
        {quiz.questions &&
          quiz.questions.map((question, index) => (
            <div
              key={question.id}
              className={`bg-white p-4 rounded-lg ${
                currentQuestion === index ? "" : "hidden"
              }`}
            >
              <h2 className="text-lg font-medium mb-2">{question.text}</h2>
              {question.options ? (
                <div className="mb-4">
                  {question.options.map(option => (
                    <div className="mb-2" key={option.id}>
                      <label className="block text-gray-700">
                        <input
                          className="mr-2 leading-tight"
                          type="radio"
                          name={question.id}
                          value={option.text}
                          onChange={handleOptionChange}
                          
                        />
                        <span className="text-sm">{option.text}</span>
                        </label>
                    </div>
                    ))}
                </div>
                ) : 
                   (
                  <div className="mb-4">
                    <input
                      className="border rounded-lg p-2 w-full"
                      type="text"
                      placeholder="Enter your answer"
                      value={answers[currentQuestion] || ""}
                      onChange={event => {
                      const newAnswers = [...answers];
                      newAnswers[currentQuestion] = event.target.value;
                      setAnswers(newAnswers);
                    }}
                    />
                  </div>
                   )}
                    <div className="flex justify-between">
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                    >
                    Previous
                    </button>
                      <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                        onClick={
                        currentQuestion === quiz.questions.length - 1
                        ? handleFinish
                        : handleNext
                        }
                      >
                      {currentQuestion === quiz.questions.length - 1
                      ? "Finish"
                      : "Next"}
                      </button>
                      </div>
                    </div>
                    ))}
                      {timeLeft > 0 && (
                      <div className="absolute bottom-0 right-0 m-4">
                        Time remaining: {timeLeft} seconds
                      </div>
                      )}
      </div>
    </div>
    );
 };

export default QuizComponent;
