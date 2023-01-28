import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , Outlet} from 'react-router-dom';

const TicketList = (props) => {
const [tickets, setTickets] = useState([]);

useEffect(() => {
axios.get('/api/tickets')
.then(res => setTickets(res.data))
.catch(err => console.log(err));
}, []);

return (
  <div className='flex w-full  justify-between  gap-24'>
    <div className="w-full border-2 overflow-y-scroll  rounded-xl shadow-md shadow-black p-4">
      <h1 className="text-lg mb-5 font-bold">Ticket List</h1>
      <div className="bg-white   p-4">
        {props.tickets.map(ticket => (
        <Link to={`/tickets/${ticket._id}`} key={ticket._id}  className="block p-2 mb-5 border-2 rounded-xl hover:bg-gray-300">
        <h3 className="text-lg font-medium">{ticket.title}</h3>
        <p className="text-sm text-gray-500">Ticket by: {ticket.userName} {ticket.userSurname}</p>
        </Link>
        ))}
      </div>
    </div>
    <Outlet />
  </div>
);
};

export default TicketList;