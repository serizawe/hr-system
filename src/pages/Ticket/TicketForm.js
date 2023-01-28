import React, { useState } from 'react';
import axios from 'axios';


const TicketForm = () => {
const [formData, setFormData] = useState({
title: '',
description: ''
});

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
const newTicket = {
...formData,
date: new Date().toString(),
userName: userName,
userSurname: userSurname
};
axios.post('/api/tickets', newTicket)
.then(res => {
console.log(res.data);
setFormData({ title: '', description: '' });
})
.catch(err => console.log(err));
};

return (
<form onSubmit={handleSubmit} className="w-full bg-white p-6 rounded-lg shadow-md">
<label className="block font-medium text-gray-700 mb-2">
Title:
</label>
<input
     type="text"
     name="title"
     value={formData.title}
     onChange={handleChange}
     className="border border-gray-400 p-2 rounded-lg w-full"
   />
<label className="block font-medium text-gray-700 mb-2 mt-4">
Description:
</label>
<textarea
     name="description"
     value={formData.description}
     onChange={handleChange}
     className="border border-gray-400 p-2 rounded-lg w-full h-32 mt-2"
   />
<button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 mt-4">
Submit
</button>
</form>
);
};

export default TicketForm;