import * as React from "react";

export default function Forgot() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
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

    return (
        <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-2xl bg-white border-2 border-gray-300 shadow-2xl">
       
          <h1 className="text-6xl text-violet-500 font-semibold">Forgot Password</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Enter your email address to reset your password
          </p>
          <div className="mt-8">
            <div className="flex flex-col">
              <label className="text-lg text-violet-500 font-medium">Email</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
                type={"email"}
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
        
            </div>

            <div className="mt-8 flex flex-col gap-y-6">
              <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03]  ease-in-out transform py-4 bg-zinc-600 rounded-xl text-white font-bold text-lg">
                Send Reset Code
              </button>
            </div>
          </div>
        </div>
      );
}
