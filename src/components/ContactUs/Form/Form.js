import React from 'react'

function Form() {
  return (
    <div className="">
    

    <div className=" mt-6">



    <div className=" h-5/6 flex w-auto shadow-xl shadow-slate-750 mt-2 pb-2 ">
    <form className="mt-6 ">
      <h6 className=" mb-9  ml-6  font-sans text-xl font-semibold">
      Reach Out
      </h6>

     
      

      <label className="ml-7 " for="fname">
        Name:
      </label>
      <input
        className="ml-7 mt-1 h-10 w-80 flex bg-gray-100"
        type="text"
        id="fname"
        name="fname"
      />
      <br />
      
      <br />
      <label className="ml-7 " for="email">
        Email:
      </label>
      <input
        className="ml-7 mt-1 h-10 w-80 flex bg-gray-100"
        type="email"
        id="email"
        name="Email"
      />
      <br />

      
      <br />

      <label className="ml-7 " for="phone no">
        Phone no:
      </label>
      <input
        className="ml-7 mt-1 h-10 w-80 flex bg-gray-100"
        type="number"
        id="phone no"
        name="phone no"
      />
<br />

      <input
        className="bg-blue-800 rounded-xl text-lg text-white font-semibold flex justify-center items-center h-10 w-40 ml-24  "
        type="submit"
        value="Submit"
      />
    </form>
  </div>

    </div>
  </div>
  )
}

export default Form
