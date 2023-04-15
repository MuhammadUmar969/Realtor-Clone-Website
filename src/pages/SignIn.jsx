import React, { useState } from 'react'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import OAuth from '../components/OAuth'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
});

 const {email,password} = formData;

 const onChangeData = (event) => {
   setFormData((prevVal) => ({
    ...prevVal,
     [event.target.id] : event.target.value
   }));
 }
   
   async function onSubmitForm (e) {
     e.preventDefault();

     try {
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(auth, email , password);

      if(userCredentials.user){
        navigate("/");
      }
      
     } catch (error) {
      toast.error("Bad user credentials");
     }
   }

  return (
    <>
    <section>
      <h1 className="text-3xl text-center mt-5 font-bold text-gray-50">Sign in</h1>
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
          <div className="relative mb-6">
          <input 
          type={showPassword ? "text" : "password"} 
          id="password" 
          value={password}
          onChange={onChangeData} 
          placeholder="Password"
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
          rounded transition ease-in-out" 
          />
          {showPassword? (
            <AiFillEyeInvisible 
            className="absolute right-3 top-3 text-xl cursor-pointer"
            onClick={() => setShowPassword((prevVal) =>
            (!prevVal))}  
            />
          ) : (<AiFillEye 
          className="absolute right-3 top-3 text-xl cursor-pointer"
          onClick={() => setShowPassword((prevVal)=>
            (!prevVal))}
          />)}
          </div>
          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
            <p className="mb-6">
              Don't have an account?
              <Link to="/sign-up" className="text-white hover:text-gray-200 transition duration-200 ease-in-out ml-1">Register</Link>
            </p>
            <p>
              <Link to="/forgot-password" className="text-white hover:text-gray-200 transition duration-200 ease-in-out">Forgot Password?</Link>
            </p>
          </div>
          <button className="w-full bg-blue-700 text-white px-7 py-3 text-sm font-medium rounded shadow-md uppercase hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900" type="submit">
        Sign in</button>
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

export default SignIn;
