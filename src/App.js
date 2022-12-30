import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Applications from "./pages/Applications/Applications"
import Details from "./pages/Applications/Details"
import Quiz from "./pages/Quiz"
import Tickets from "./pages/Tickets/Tickets"
import TicketDetails from "./pages/Tickets/TicketDetails"
import Registration from "./pages/Registration"

export default function App() {
  return (
    <div className=" w-full h-screen bg-white">
      <div className=" w-1/6">
        <Navbar/>
      </div>
      <div className="flex mt-20 pl-80 w-5/6  h-3/4">
        <Routes>
          <Route  path="/" element={<Applications/>}>
             <Route  path="Details/:id" element={<Details/>} />
          </Route>
          <Route path="/Registration" element={<Registration/>} />
          <Route path="/Quiz" element={<Quiz/>} />
          <Route  path="/Tickets" element={<Tickets/>}>
             <Route  path=":id" element={<TicketDetails/>} />
          </Route>
        </Routes>
      </div>

    </div>
  );
}
