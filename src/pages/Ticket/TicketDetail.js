import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReplyList from './ReplyList';
import ReplyForm from './ReplyForm';
import { useParams } from 'react-router-dom';

const TicketDetail = ({tickets}) => {
const { id } = useParams();
const [ticket, setTicket] = useState({});
const ticketss = tickets.find(ticket => ticket._id === id);

useEffect(() => {
    axios.get('/api/tickets/${id}')
    .then(res => {
    setTicket(res.data);
    })
.catch(err => console.log(err));
}, [id]);

return (
    <div className="relative hover:scale-110 transition-all ease-in-out  overflow-scroll shadow-2xl shadow-black border-black w-full rounded-lg p-10 ">
        <h2 className="text-lg font-medium">{ticketss.title}</h2>
        <p className="text-gray-700">{ticketss.description}</p>
        <p className="text-gray-700"> By {ticketss.userName} {ticketss.userSurname}</p>
        <ReplyList replies={ticketss.replies} />
        <ReplyForm ticketId={ticketss._id} />
    </div>
);
};
export default TicketDetail;