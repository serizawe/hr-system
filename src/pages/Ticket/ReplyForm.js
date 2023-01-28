import React, { useState } from 'react';
import axios from 'axios';


const ReplyForm = ({ ticketId }) => {
  const [formData, setFormData] = useState({ text: '' });

  // Get the user's name and surname from local storage
  const userName = localStorage.getItem('userName');
  const userSurname = localStorage.getItem('userSurname');

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newReply = {
      ...formData,
      date: new Date().toString(),
      userName: userName,
      userSurname: userSurname
    };
    axios.post(`/api/tickets/${ticketId}/replies`, newReply)
      .then(res => {
        console.log(res.data);
        setFormData({ text: '' });
      })
      .catch(err => console.log(err));
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <label className="block font-medium mb-2">Reply:</label>
      <textarea
        className="bg-gray-200 p-2 rounded-lg w-full"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />
      <button className="bg-indigo-500 text-white p-2 rounded-lg mt-4 hover:bg-indigo-600">Submit</button>
    </form>
  );
};

export default ReplyForm;
