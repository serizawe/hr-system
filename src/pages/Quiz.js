import React, { useState } from 'react';
import { useEffect} from 'react';

const Quiz = () => {
  const [pastQuizzes, setPastQuizzes] = useState([]);
  const [newQuiz, setNewQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [questionPoints, setQuestionPoints] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [questionPool, setQuestionPool] = useState([]);
  const [tags, setTags] = useState([]);

   useEffect(() => {
    const currentQuiz = localStorage.getItem('quiz');
    if (currentQuiz) {
      setCurrentQuiz(JSON.parse(currentQuiz));
    }
  }, []);

  

  const handleNewQuiz = () => {
    setNewQuiz(true);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index].label = e.target.value;
    setOptions(newOptions);
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
};

  const handleOptionPercentageChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index].percentage = e.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    
    const newOption = { label: '', percentage: '' };
    setOptions([...options, newOption]);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleQuestionPointsChange = (e) => {
    setQuestionPoints(e.target.value);
  };

  const handleAddQuestion = () => {
    
    if (!question || !options || !answer || options.filter(e => e.percentage === '').length > 0) 
  
  {
      alert("Please fill out all fields before saving the question");
      return;
    }
    const newQuestion = { question, options, answer, points: questionPoints,tags: tags };
    
    
    setCurrentQuiz([...currentQuiz, newQuestion]);
    const cquiz = [...currentQuiz];
    cquiz.push(newQuestion)

    setQuestion('');
    setOptions([]);
    setAnswer('');
    setTags([]);
    setQuestionPoints('');
    console.log(currentQuiz);
    localStorage.setItem('quiz', JSON.stringify(cquiz));
  };

  const handleAddTag = () => {
    console.log(currentQuiz);
    const newTag = { label: ''};
    setTags([...tags,newTag]);
  };

  const handleTagChange = (e,index) => {
    const newTags = [...tags];
    newTags[index].label = e.target.value;
    setTags(newTags);
  };  

  const handleEdit = (index) => {
    const selectedQuestion = currentQuiz[index];
    setSelectedQuestionId(index);
    setQuestion(selectedQuestion.question);
    setOptions(selectedQuestion.options);
    setAnswer(selectedQuestion.answer);
    setQuestionPoints(selectedQuestion.points);
    setTags(selectedQuestion.tags)
    setEditMode(true);
  };

  const handleUpdateQuestion = () => {
    const updatedQuiz = [...currentQuiz];
    const updatedQuestion = { question, options, answer, points: questionPoints,tags: tags};
    updatedQuiz[selectedQuestionId] = updatedQuestion;
    setCurrentQuiz(updatedQuiz);
    setQuestion('');
    setOptions([]);
    setAnswer('');
    setQuestionPoints('');
    setTags([]);  
    setEditMode(false);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuiz = [...currentQuiz];
    updatedQuiz.splice(index, 1);
    setCurrentQuiz(updatedQuiz);
    };
    
    const handleDeleteTag = (index) => {
      const updatedTags = [...tags];
      updatedTags.splice(index, 1);
      setTags(updatedTags);
    };

    const handleDeleteQuestionFromPool = (index) => {
      const updatedPool = [...questionPool];
      updatedPool.splice(index, 1);
      setQuestionPool(updatedPool);
    };
    
    const handleSaveQuiz = () => {
    if (!currentQuiz.length) {
    alert("Please add at least one question before saving the quiz");
    return;
    }
    localStorage.removeItem("quiz");
    setPastQuizzes([...pastQuizzes, currentQuiz]);
    setCurrentQuiz([]);
    setNewQuiz(false);
    alert("Quiz saved!");
    };
    
    const handleAddFromPool = (index) => {
    const selectedQuestion = questionPool[index];
    setCurrentQuiz([...currentQuiz, selectedQuestion]);
    };
    
    const handleSaveToPool = () => {
    if (!question || !options || !answer || !questionPoints ) {
      alert("Please fill out all fields before saving the question");
    return;
    }
    const newQuestion = { question, options, answer, points: questionPoints ,tags: tags};
    setQuestionPool([...questionPool, newQuestion]);
    setQuestion('');
    setOptions([]);
    setTags([]);    
    setAnswer('');
    setQuestionPoints('');
    };
    
    return (
    <div className="flex-col  h-[88vh] w-full overflow-y-scroll p-10 mt-0 border-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-3 py-2 px-4 rounded" onClick={handleNewQuiz}>Create New Quiz</button>
      {newQuiz && (
      <div className="create-quiz">
        <div className="create-question">
          <label className="block text-gray-700 font-medium mb-2">Question:</label>
          <textarea  type="text" value={question} onChange={handleQuestionChange} className="block mb-3 h-48 w-full border border-gray-400 p-2 rounded-lg" />
          <div className='flex'>
            <label>Tags:</label>
              {tags.map((tags, index) => (
              <div key={index}>
              
              <input type="text" value={tags.label} onChange={(e) => handleTagChange(e, index)} className="w-4/12 mb-3 ml-3 border border-gray-400 p-2 rounded-lg " />
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold ml-2 py-2 px-4 rounded' onClick={() => handleDeleteTag(index)}>Delete</button>
              </div>
              
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddTag}>Add Tag</button>
          
          <div className="options">
            <label className="block  text-gray-700 font-medium mb-2">Question Points:</label>
            <input type="text" value={questionPoints} onChange={handleQuestionPointsChange} className="w-1/12  border border-gray-400 p-2 mb-3 rounded-lg" />
            <label className="block text-gray-700 font-medium mb-2">Options:</label>
            {options.map((option, index) => (
            <div className='flex gap-5' key={index}>
              <input type="text" value={option.label} onChange={(e) => handleOptionChange(e, index)} className="w-1/2 mb-3 border border-gray-400 p-2 rounded-lg" />
              <label className='block'>Option Percentage:</label>
              <input type="text" value={option.percentage} onChange={(e) => handleOptionPercentageChange(e, index)} className="w-1/12 mb-3 border border-gray-400 p-2 rounded-lg " />
              <button className= "mb-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteOption(index)}>Delete</button>
            </div>
            ))}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddOption}>Add Option</button>
            <br />
          </div>
          <label className="block text-gray-700 font-medium mb-2">Answer:</label>
          <input type="text" value={answer} onChange={handleAnswerChange} className="w-1/2 border border-gray-400 mb-3 p-2 rounded-lg" />
          <div>
            {editMode ? (
            <button className="mb-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpdateQuestion}>Update Question</button>
            ) : (
            <button className="mb-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddQuestion}>Add Question</button>
            )}
          </div>
        </div>
        <div className="quiz-question-pool">
        <label className="block mb-3 text-gray-700 font-medium ">Question Pool:</label>
        <ul>
          {questionPool.map((question, index) => (
        <li key={index}>
        {question.question}
        <button className="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddFromPool(index)}>Add from Pool</button>
        <button className= "mb-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteQuestionFromPool(index)}>Delete</button>
        </li>
          ))}
          </ul>
          <button className="mb-3 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded" onClick={handleSaveToPool}>Save to Pool</button>
        </div>
          <div className="quiz-preview">
          <label className="block  text-gray-700 font-medium mb-3">Quiz Preview:</label>
        <ul>
          {currentQuiz.map((question, index) => (
          <li key={index}>
          {question.question}
          <button className="mb-3 bg-yellow-500 hover:bg-yellow-700 ml-2 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(index)}>Edit</button>
          <button className= "mb-3 bg-red-500 hover:bg-red-700 ml-2 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteQuestion(index)}>Delete</button>
        </li>
        ))}
          </ul>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold mb-3 py-2 px-4 rounded" onClick={handleSaveQuiz}>Save Quiz</button>
        </div>
      </div>
      )}
      <div className="past-quizzes">
        <label className="block text-gray-700 font-medium mb-3">Past Quizzes:</label>
        <ul>
        {pastQuizzes.map((quiz, index) => (
        <li key={index}>Quiz {index + 1}</li>
        ))}
        </ul>        
      </div>

    </div>
);
};

export default Quiz;