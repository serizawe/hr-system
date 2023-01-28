import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {AiOutlineSearch,AiOutlineCheck,AiOutlineEdit,AiOutlinePlus,AiOutlineClose} from 'react-icons/ai'


const Tickets = () => {
  const tickets = [
    {
      id:1,
      name:'Ozan',
      surname:'Ünsal',
      title:'Test Problem',
    },
    {
      id:2,
      name:'Murat',
      surname:'Akbıyık',
      title:'Password Problem',
    },
      {
      id:3,
      name:'Göknil',
      surname:'Kömürcü',
      title:'Feedback',
    },
    {
      id:4,
      name:'Melda',
      surname:'Onay',
      title:'Problem',
    },
    {
      id:5,
      name:'Erkan',
      surname:'Kayım',
      title:'Problem',
    }
  ]
  
  return (
  <div className='flex  justify-between  gap-24 w-[1024px]'>
    <div className='h-[85vh]  transition-all ease-in-out overflow-y-scroll border-black rounded-lg shadow-2xl shadow-black w-[1000px] p-10'>
      <div className='relative'>
        
      {tickets.map(ticket=>(
        <NavLink
        className='flex flex-col w-full rounded-2xl border-2 border-gray-500  p-5 mt-5'
        key={(ticket.id)}
        to={`/Tickets/${ticket.id}`} 
        >
          <p>
            {ticket.name }
            <span className='px-1'>{ticket.surname}</span>
          </p>
          <p>
            {ticket.title}
          </p>
        </NavLink>
        )
      )
      }
      </div>
    </div>
    <Outlet />
  </div>

  )
}

export default Tickets