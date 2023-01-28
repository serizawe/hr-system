

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateInterview() {
  const [staffList, setStaffList] = useState([]);
  const [applicantList, setApplicantList] = useState([]);
  const [managerList, setManagerList] = useState([]);
  const [filteredStaffList, setFilteredStaffList] = useState([]);
  const [filteredManagerList, setFilteredManagerList] = useState([]);
  const [filteredApplicantList, setFilteredApplicantList] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState('');const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [staffSearchQuery, setStaffSearchQuery] = useState('');
  const [managerSearchQuery, setManagerSearchQuery] = useState('');
  const [applicantSearchQuery, setApplicantSearchQuery] = useState('');


  useEffect(() => {
    axios.get('/staff')
      .then((res) => {
        setStaffList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios.get('/manager')
      .then((res) => {
        setManagerList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get('/applicant')
      .then((res) => {
        setApplicantList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setFilteredStaffList(
      staffList.filter((staff) => staff.name.toLowerCase().includes(staffSearchQuery.toLowerCase()))
    );
    setFilteredApplicantList(
      applicantList.filter((applicant) => applicant.name.toLowerCase().includes(applicantSearchQuery.toLowerCase()))
    );
    setFilteredManagerList(
      managerList.filter((manager) => manager.name.toLowerCase().includes(managerSearchQuery.toLowerCase()))
    );
  }, [staffSearchQuery,applicantSearchQuery,managerSearchQuery]);
  
  const interview = {
      date,
      time,
      selectedStaff,
      selectedApplicant,
      notes
    };

  const handleStaffSelect = (staff) => {
    setSelectedStaff(staff);
  }

  const handleApplicantSelect = (applicant) => {
    setSelectedApplicant(applicant);
  }

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  
  const handleStaffSearchChange = (e) => {
    setStaffSearchQuery(e.target.value);
  };

  const handleManagerSearchChange = (e) => {
    setManagerSearchQuery(e.target.value);
  };

  const handleApplicantSearchChange = (e) => {
    setApplicantSearchQuery(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("Please enter a valid date");
    }
    else if (!time) {
      alert("Please enter a valid time");
    } else {
      // submit the form
    }
  }


  return (
    <div className='border-2 ml-24 rounded-xl w-5/6 h-[85vh] p-10'>
      <form>
      <label className='block mt-3 mr-5'>
        Set date
        <input
          type="date"
          className="border ml-10 border-gray-400 p-2 rounded-lg"
          value={date}
          onChange={handleDateChange}
          required
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
        />
      </label>  
      <label className='block mt-3 '>
        Set time  
        <input
          type="time"
          className="border ml-10 border-gray-400 p-2 rounded-lg"
          value={time}
          onChange={handleTimeChange}
          required
          pattern="[0-9:[0-9]{2}"
        />
        </label> 
        <div className='mt-3 flex-col  '>
          <p>Search HR staff:</p>
          <input
            type="text"
            className="border mt-2  border-gray-400 p-2 rounded-lg w-1/2"
            placeholder="Search for staff"
            value={staffSearchQuery}
            onChange={handleStaffSearchChange}
          />
        </div  >
        <ul>
          {filteredStaffList.map((staff) => (
              <li key={staff.id} onClick={() => handleStaffSelect(staff)}>{staff.name}</li>
          ))}
        </ul>
        <div className='mt-3 flex-col  '>
          <p>Search Managers:</p>
          <input
            type="text"
            className="border mt-2  border-gray-400 p-2 rounded-lg w-1/2"
            placeholder="Search for managers"
            value={managerSearchQuery}
            onChange={handleManagerSearchChange}
          />
        </div  >
        <ul>
          {filteredStaffList.map((staff) => (
              <li key={staff.id} onClick={() => handleStaffSelect(staff)}>{staff.name}</li>
          ))}
        </ul>
      
      </form>
      <form>
        <div className=' flex-col mt-3'>
          <p>Search Applicants:</p>
          <input
            type="text"
            className="border mt-2 border-gray-400 p-2 rounded-lg w-1/2"
            placeholder="Search for applicant"
            value={applicantSearchQuery}
            onChange={handleApplicantSearchChange}
          />
        </div>
        <ul>
          {filteredApplicantList.map((applicant) => (
            <li key={applicant.id} onClick={() => handleApplicantSelect(applicant)}>{applicant.name}</li>
          ))}
        </ul>
        <div className="mb-4">
          <label className="block mt-3 font-medium mb-2">Notes:</label>
          <textarea
            className="border border-gray-400 p-2 rounded-lg h-40 w-2/3"
            value={notes}
            onChange={handleNotesChange}
          />
        </div>
        <div className="text-right ">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onSubmit={handleSubmit}
          >
            Set Interview
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateInterview;
