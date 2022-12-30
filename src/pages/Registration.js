import React from 'react'
const Registration = () => {
  return (
    <div className='flex items-center gap-20' >
      <div className="max-w-2xl px-10 10 ">
        <h1 className="text-4xl  mt-10 font-semibold text-slate-900	">Create Account</h1>
        <p className="font-medium text-2xl text-gray-800 mt-4">
          Create a candidate account
        </p>
        <div className="mt-8">
          <div className="flex justify-self-auto  gap-16">
            <div className="flex flex-col w-1/2">
              <label className="text-lg font-medium text-slate-900">Name</label>
              <input
                className="h-1/2 border-2 border-gray-600 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-lg font-medium text-slate-900">Surname</label>
              <input
                className="w-full  h-1/2 border-2 border-gray-600 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Surname"
              />
            </div> 
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium text-slate-900">Email</label>
            <input
              className="w-full h-1/2 border-2 border-gray-600 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter candidate email"
              type={"email"} 
            />

          </div> 
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium text-slate-900">Password</label>
            <input
              className="w-full h-1/2 border-2 border-gray-600 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Choose a temporary password"
              type={"password"}
            />
          </div> 
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium text-slate-900">Applied Job</label>
            <input
              className="w-full h-1/2 border-2 border-gray-600 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Applied job"
            />
          </div>
          <div className="mt-8 flex flex-col items-end gap-y-6">
            <button className=" w-32 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.03]  ease-in-out py-4 bg-gray-800 rounded-xl text-white font-bold text-lg">
              Create
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-xl text-green-800'>
          create butonuna bazinca otomatik e mail gidecek.
        </h1>
        <h1 className='text-xl text-green-800'>
          create butonuna bazinca otomatik e mail gidecek.
        </h1>
        <h1 className='text-xl text-green-800'>
          create butonuna bazinca otomatik e mail gidecek.
        </h1>
        <h1 className='text-xl text-green-800'>
          create butonuna bazinca otomatik e mail gidecek.
        </h1>
        <h1 className='text-xl text-green-800'>
          create butonuna bazinca otomatik e mail gidecek.
        </h1>
        <h1 className='text-xl text-green-800'>
          create butonuna bazinca otomatik e mail gidecek.
        </h1>
        <h1 className='text-xl text-green-800'>
          create butonuna bazinca otomatik e mail gidecek.
        </h1>
      </div>
    </div>
  )
}

export default Registration