import * as React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import {RiMenuFoldLine,RiMenuUnfoldLine} from 'react-icons/ri'
import {BiUserCircle} from 'react-icons/bi'

const Navbar = () => {
const [Menu,setMenu] = React.useState(false)
  return (

    <div className="flex w-full mr-3">
      <div className="fixed  text-white border-gray-400 top-0 left-0 w-full h-14 bg-[#001440]" >
        vinna
        <BiUserCircle className="absolute  top-4 right-10  cursor-pointer" size={30} color={'white'} />
      </div>
      <div className="fixed top-16 left-3" onClick={()=> setMenu(!Menu)}>
        <RiMenuUnfoldLine className="cursor-pointer" size={30}/>
      </div>
      
      <div className={Menu ? "fixed top-14 left-0 border-t-2 border-gray-400 w-[220px] h-[98vh] bg-[#001440] text-white shadow-2xl shadow-black z-10 duration-200" : "fixed top-0 left-[-100%] w-[240px] h-screen bg-white z-10 duration-200"}>
        <RiMenuFoldLine className="absolute right-2 top-1 cursor-pointer" onClick={() => setMenu(!Menu)} size={30}/>
        <ul className="flex flex-col justify-around gap-20 mt-20">
          <li className="  ">
            <NavLink className="inline-block ml-5 pt-20 text-xl border-b-2 border-white hover:text-green-700 transition-all ease-in-out" to={"/"}>Applications</NavLink>
          </li>
          <li className="">
            <NavLink className="inline-block ml-5  text-xl border-b-2 border-white hover:text-green-700 transition-all ease-in-out" to={"/Registration"}>Register a candidate</NavLink>
          </li>
          <li className="">
            <NavLink className="inline-block ml-5  text-xl border-b-2 border-white hover:text-green-700 transition-all ease-in-out"to={"/Tickets"}>Tickets</NavLink>
          </li>
          <li className="">
            <NavLink className="inline-block ml-5  text-xl border-b-2 border-white hover:text-green-700 transition-all ease-in-out"to={"/Quiz"}>Create quiz</NavLink>
           </li>              
        </ul>
      </div>

   </div>
  );
} 
export default Navbar