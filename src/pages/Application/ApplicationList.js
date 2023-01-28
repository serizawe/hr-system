import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ApplicationList = () => {
    const [applications, setApplications] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('/api/applications')
            .then(res => setApplications(res.data))
            .catch(err => console.error(err));
    }, []);

    const filteredApplications = applications.filter(application => {
        return application.name.toLowerCase().includes(searchTerm.toLowerCase())
            || application.surname.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="bg-white p-4">
            <input 
                className="border rounded w-full py-2 px-3" 
                type="text" 
                placeholder="Search by name or surname"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="py-4">
                {filteredApplications.map(application => (
                    <ApplicationCard key={application.id} application={application} />
                ))}
            </div>
        </div>
    );
}

const ApplicationCard = ({ application }) => {
    

    return (
        <Link to={`/applications/${application.id}`} className="block p-4 rounded-lg bg-gray-100 hover:bg-gray-200">
            <div className="flex items-center">
                <div className="text-lg font-medium">{application.name} {application.surname}</div>
                <div className="ml-2 text-sm text-gray-600">({application.status})</div>
            </div>
        </Link>
    );
}

export default ApplicationList;
