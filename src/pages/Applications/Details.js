import React from 'react'
import {BsCalendar3} from 'react-icons/bs'
import {AiOutlineSearch,AiOutlineCheck,AiOutlineEdit,AiOutlinePlus,AiOutlineClose} from 'react-icons/ai'
import { useParams } from 'react-router-dom'

const Details = () => {
    const details = [
    {
      id:1,
      name:'Ozan',
      surname:'Ünsal',
      appliedJob:'Web developer',
      status:"On progress"
    },
    {
      id:2,
      name:'Murat',
      surname:'Akbıyık',
      appliedJob:'Web developer',
      status:"On progress"      
    },
      {
      id:3,
      name:'Göknil',
      surname:'Kömürcü',
      appliedJob:'Web developer',
      status:"On progress"
    },
    {
      id:4,
      name:'Melda',
      surname:'Onay',
      appliedJob:'Web developer',
      status:"On progress"
    },
    {
      id:5,
      name:'Erkan',
      surname:'Kayım',
      appliedJob:'Web developer',
      status:"On progress"
    }
  ]
  const {id} = useParams()
  console.log(id)

  return (

    <div className='relative hover:scale-110 transition-all ease-in-out  shadow-2xl shadow-black border-black w-[600px] rounded-lg p-10 '>
        {details.map((detail) => {
        if (detail.id === parseInt(id)) {
          return (
          <div >
            <h1 className='text-xl mt-2'>Application {detail.id} </h1>
            <p className='text-xl mt-2'>{detail.name}</p>
            <p className='text-xl mt-2'>{detail.surname}</p>
            <span className='block text-xl mt-2 '>{detail.appliedJob} </span>
            <span className='inline-block pr-2 mt-2 text-xl'>Status:</span>
            <input
              className="ml-10 pl-5 h-5 w-36  p-4 mt-1 bg-transparent"
              placeholder={detail.status}
            />
            <AiOutlineEdit className='inline absolute right-8 top-48 cursor-pointer' size={25}/>
            <span className='inline-block text-xl mr-6 mt-14'>Set interview</span>
            <span className='inline-block text-xl mt-14'>Give Feedback</span>
            <BsCalendar3 className='inline ml-10 mt-2 cursor-pointer' size={25}/>
            <AiOutlinePlus className='inline ml-[120px] mt-2 cursor-pointer' size={30}/>
          </div>
          );
        }

        
      })}
  
    </div>
  )
}

export default Details