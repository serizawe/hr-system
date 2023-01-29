import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = event => {
    const password = event.target.value;
    setPassword(password);
    if (password.length < 8 || password.length > 24) {
      setPasswordError("Password must be between 8 and 24 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = event => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
    if (confirmPassword !== password) {
      setPasswordError("Passwords do not match.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="max-w-1/2 px-10 py-20 rounded-2xl bg-white border-2 border-gray-300 shadow-2xl">
      <h1 className="text-6xl text-violet-500 font-bold">Reset Password</h1>
      <p className="font-medium text-lg text-gray-500 mt-6">
        Enter your new password
      </p>
      <div className="mt-8">
        <div className="flex flex-col mt-4 text-violet-500">
          <label className="text-lg font-medium">New Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your new password"
            type={"password"}
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
        <div className="flex flex-col mt-4 text-violet-500">
          <label className="text-lg font-medium">Confirm Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Confirm your password"
            type={"password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-6">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03]  ease-in-out transform py-4 bg-zinc-600 rounded-xl text-white font-bold text-lg" disabled={passwordError}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
