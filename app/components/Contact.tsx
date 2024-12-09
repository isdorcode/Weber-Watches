import React from 'react';

function Contact() {
  return (
    <div className="bg-[url('/get.png')] bg-cover bg-center h-56 sm:h-64 lg:flex lg:flex-row items-center px-6 py-12 sm:p-12 justify-start gap-8 sm:gap-16">
       <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 ">Get In Touch With Us</h2>

        <div className="mb-4 relative w-60 sm:w-80 ">
        <button
          type="submit"
          className=" bg-yellow-600 text-sm  text-black py-3 px-4 rounded-lg absolute top-0 left-48 sm:left-72 font-normal"
        >
          Send
        </button>
          <input 
            className="bg-white text-black p-3 rounded-lg text-sm  mb-2 w-full focus:outline-none"  type="email"
            id="email"
            placeholder="Enter Your Email"
            />
        </div>
    </div>
  );
}

export default Contact;
