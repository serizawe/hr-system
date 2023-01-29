import React, { useState } from 'react';

const Registration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = React.useState("");
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const [phoneError, setPhoneError] = React.useState("");
    const [birthdate, setBirthdate] = useState('');


    const handlePhoneNumberChange = (e) => {
        const phoneNumber = e.target.value;
        setPhoneNumber(phoneNumber);
        if (phoneNumberRegex.test(phoneNumber)) {
            setPhoneNumber(phoneNumber);
            setPhoneError("");
        } else {
            setPhoneError("Enter a valid phone number.");
        }
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    }

    const handleEmailChange = event => {
        const email = event.target.value;
        setEmail(email);
        if (email.indexOf("@") === -1 || !emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, surname, email, password, gender, phoneNumber, emailError, phoneError, birthdate);
    }
    return (

        <div className='flex items-center gap-20' >
            <div className="max-w-2xl px-10 10 ">
                <h1 className="text-4xl  mt-10 font-semibold text-slate-900	">Create Account</h1>
                <p className="font-medium text-2xl text-gray-800 mt-4">
                    Create a candidate account
                </p>
                <div className="mt-8">
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-self-auto  gap-16">
                            <div className="flex flex-col w-1/2">
                                <label className="text-lg font-medium text-slate-900">Name</label>
                                <input
                                    value={name}
                                    onChange={handleNameChange}
                                    className="h-1/2 border-2 border-gray-600 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label className="text-lg font-medium text-slate-900">Surname</label>
                                <input
                                    className="w-full  h-1/2 border-2 border-gray-600 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Surname"
                                    onChange={handleSurnameChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mt-4">
                            <label className="text-lg font-medium text-slate-900">Email</label>
                            <input
                                value={email}
                                onChange={handleEmailChange}
                                className="w-full h-1/2 border-2 border-gray-600 rounded-xl p-3 mt-1 bg-transparent"
                                placeholder="Enter candidate email"
                                type={"email"}
                            />
                            {emailError && <p className="text-red-500">{emailError}</p>}
                        </div>
                        <div className="flex flex-col mt-4">
                            <label className="text-lg font-medium text-slate-900">Password</label>
                            <input
                                className="w-full h-1/2 border-2 border-gray-600 rounded-xl p-3 mt-1 bg-transparent"
                                placeholder="Choose a temporary password"
                                type={"password"}
                                onChange={handlePasswordChange}
                            />

                        </div>

                        <div className="mt-8 flex flex-col items-end gap-y-6">
                            <button className=" w-32 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03]  ease-in-out py-4 bg-gray-800 rounded-xl text-white font-bold text-lg">
                                Create
                            </button>

                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex flex-col w-full mt-4">
                    <label className="text-lg font-medium text-slate-900">Birthdate</label>
                    <input
                        className="w-full border-2 border-gray-600 rounded-xl p-4 mt-1 bg-transparent"
                        placeholder="Enter your birthdate"
                        type={"date"}
                        onChange={handleBirthdateChange}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-lg font-medium text-slate-900">Gender</label>
                    <select
                        className="w-full border-2 border-gray-600 rounded-xl p-3 mt-1 bg-transparent"
                        value={gender}
                        onChange={handleGenderChange}
                    >
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>


                </div>
                <div className="flex flex-col w-full mt-4">
                    <label className="text-lg font-medium text-slate-900">Phone Number</label>
                    <input
                        className="w-full h-1/2 border-2 border-gray-600 rounded-xl p-3 mt-1 bg-transparent"
                        placeholder="Enter your phone number"
                        type={"tel"}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    {phoneError && <p className="text-red-500">{phoneError}</p>}
                </div>
            </div>

        </div>


    )
}

export default Registration