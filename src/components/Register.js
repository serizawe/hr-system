import * as React from "react";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleEmailChange = event => {
    const email = event.target.value;
    setEmail(email);
    if (email.indexOf("@") === -1 || !emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  }

  const handlePasswordChange = event => {
    const password = event.target.value;
    setPassword(password);
    if (password.length < 8 || password.length > 24) {
      setPasswordError("Password must be between 8 and 24 characters.");
    } else {
      setPasswordError("");
    }
  }
  return (
    <div className=" w-11/12 max-w-[700px] px-10 py-10 rounded-2xl bg-white border-2 border-gray-300 shadow-2xl">
      <h1 className="text-5xl  font-semibold text-slate-700	">Register</h1>
      <p className="font-medium text-2xl text-gray-500 mt-4">
        Create an account
      </p>
      <div className="mt-8">
        <div className="flex justify-self-auto  gap-16">
          <div className="flex flex-col w-1/2">
            <label className="text-lg font-medium text-slate-700">Name</label>
            <input
              className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-lg font-medium text-slate-700">Surname</label>
            <input
              className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Surname"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-lg font-medium text-slate-700">Email</label>
          <input
            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
            type={"email"}
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-lg font-medium text-slate-700">Password</label>
          <input
            className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Choose a password"
            type={"password"}
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
        <div className="mt-8 flex justify-between items-center"></div>
        <div className="mt-8 flex flex-col gap-y-6">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03]  ease-in-out transform py-4 bg-[#54457F] rounded-xl text-white font-bold text-lg">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
