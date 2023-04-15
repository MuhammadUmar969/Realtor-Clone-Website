import React, { useState } from 'react'
import { getAuth, updateProfile} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { doc, updateDoc } from 'firebase/firestore';
import {db} from '../firebase';
import {FcHome} from 'react-icons/fc'
import { Link } from 'react-router-dom';

const Profile = () => {

  const auth = getAuth();
  const navigate = useNavigate();

  const [changeDetails, setChangeDetails] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  
  const {name , email} = formData;
  
  const onLogOut = () => {
   auth.signOut();
   navigate("/");
  }

  const onChangeInput = (event) => {
   setFormData((prevVal) =>({
    ...prevVal,
    [event.target.id] : event.target.value,
   }));
  }

  async function onUpdateDataBase () {
     try {
       if(auth.currentUser.displayName !== name){
          // update display name
          await updateProfile(auth.currentUser, {
            displayName:name
          });

          // update name in the firestore

          const docRef = doc(db, "users" , auth.currentUser.uid)
          await updateDoc(docRef, {
            name,
          });
       }
       toast.success("Profile details updated");
     } catch (error) {
      toast.error("Could not update the profile details");
     }
  }

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold text-white">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input 
            type="text" 
            id ="name" 
            value={name}
            disabled= {!changeDetails}
            onChange={onChangeInput}
            className={`mb-6 w-full px-4 py-2 text-xl text-black bg-white border-black
            rounded transition ease-in-out ${changeDetails && "bg-gray-700 text-white focus:bg-gray-950"}`}  
            />

            <input 
            type="email" 
            id ="email" 
            value={email}
            disabled
            className="mb-6 w-full px-4 py-2 text-xl text-black bg-white border-black
            rounded transition ease-in-out"  
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">Do want to change your name?
              <span
              onClick={() => {
                changeDetails && onUpdateDataBase();
                setChangeDetails((prevVal) => 
                !prevVal )
               } } 
              className="text-gray-50 hover:text-gray-200 transition duration-150 ease-in-out ml-1 cursor-pointer"
              >{changeDetails ? "Apply change" : "Edit"}
              </span></p>
              <p
              onClick={onLogOut} 
              className="text-gray-50 hover:text-gray-200 transition duration-150 ease-in-out ml-1 cursor-pointer">Sign out</p>
            </div>
          </form>
          <button type="submit" className="w-full bg-black text-white px-7 py-3
          uppercase font-medium shadow-md text-sm rounded hover:bg-opacity-80
          transition duration-150 ease-in-out hover:shadow-lg active:bg-opacity-50">
            <Link to="/create-listing"
            className="flex justify-center items-center">
            <FcHome className="mr-2 text-3xl bg-white rounded-full p-1 border-2"/>
            Sell or rent your home
            </Link>
          </button>
        </div>
      </section>
    </>
  )
}

export default Profile;
