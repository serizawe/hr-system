import React from 'react'
import { useParams } from 'react-router-dom'

const TicketDetails = () => {
    const tickets = [
    {
      id:1,
      name:'Ozan',
      surname:'Ünsal',
      title:'Test Problem',
      text:"I can't submit the test."
    },
    {
      id:2,
      name:'Murat',
      surname:'Akbıyık',
      title:'Problem',
      text:"Doesn't work"      
    },
      {
      id:3,
      name:'Göknil',
      surname:'Kömürcü',
      title:'Problem',
      text:"Doesn't work"
    },
    {
      id:4,
      name:'Melda',
      surname:'Onay',
      title:'Problem',
      text:"Doesn't work"
    },
    {
      id:5,
      name:'Erkan',
      surname:'Kayım',
      title:'Problem',
      text:"Doesn't work"
    }
  ]
  const {id} = useParams()
  console.log(id)

  return (

    <div className='relative hover:scale-110 transition-all ease-in-out  shadow-2xl shadow-black border-black w-[600px] rounded-lg p-10 '>
        {tickets.map((ticket) => {
        if (ticket.id === parseInt(id)) {
          return (
          <div >
            <h1 className='text-xl mt-2'> {ticket.title} </h1>
            <p className='text-xl mt-2'>{ticket.text}</p>
            <p className='text-xl mt-2'>{ticket.name}</p>
            <span className='inline-block text-xl mt-2 '>{ticket.surname} </span>
            <div className='flex flex-col justify-center items-center'>
              
              <textarea
                 className="bg-gray border-2  border-black rounded-xl w-full h-48 p-4 mt-10"
              />
              <button className=" mt-4 w-1/2 hover:scale-[1.03]  ease-in-out transform py-4 bg-[#001440]  rounded-xl text-white font-bold text-lg">
               Answer
              </button>
            </div>

            
          </div>
          );
        }

        
      })}
  
    </div>
  )
}

export default TicketDetails