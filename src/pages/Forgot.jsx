import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import OAuth from '../components/OAuth'
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const Forgot = () => {
  
  const [email, setEmail] = useState("");

 const onChangeData = (event) => {
   setEmail(event.target.value);
 }

 async function onSubmitForm (e) {
  e.preventDefault();

  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
    toast.success("Email was sent");

  } catch (error) {
    toast.error("Could not send reset password");
  }
 }

  return (
    <>
    <section>
      <h1 className="text-3xl text-center mt-5 font-bold text-gray-50">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl max-auto">
       <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
        <img src="./src\images\sigin.png" alt="key image" className="w-full rounded-2xl"/>
       </div>
       <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
        <form onSubmit={onSubmitForm}>
          <input 
          type="email" 
          id="email" 
          value={email}
          onChange={onChangeData} 
          placeholder="Email Address"
          className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
          rounded transition ease-in-out" 
          />
          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
            <p className="mb-6">
             Don't have an account?
              <Link to="/sign-up" className="text-white hover:text-gray-200 transition duration-200 ease-in-out ml-1">Register</Link>
            </p>
            <p>
              <Link to="/sign-in" className="text-white hover:text-gray-200 transition duration-200 ease-in-out">Sign in instead</Link>
            </p>
          </div>
          <button className="w-full bg-blue-700 text-white px-7 py-3 text-sm font-medium rounded shadow-md uppercase hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900" type="submit">
        Send reset password</button>
        <div className="flex items-center my-4 before:border-t before:flex-1 before:border-white after:border-t after:flex-1 after:border-white">
          <p className="text-center font-semibold mx-3">OR</p>
        </div>
        <OAuth/>
        </form>
       </div>
      </div>
    </section>
    </>
  )
}

export default Forgot;
