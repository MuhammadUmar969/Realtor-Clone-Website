import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { toast } from "react-toastify";

export default function Contact({userRef,listing}) {

   const [landlord, setLandlord] = useState(null);

   const [message, setMessage] = useState(""); 

   useEffect(() => {
      async function getLandLord (){
       const docRef = doc(db, "users", userRef);
       const docSnap = await getDoc(docRef);

       if(docSnap.exists()){
         setLandlord(docSnap.data());
       }
       else{
        toast.error("Could not get landlord data");
       }
      }
      getLandLord();
   },[userRef])

   function onChangeMessage(e){
     setMessage(e.target.value);
   }

  return (
    <div>
      {landlord !== null && (
        <div className="flex flex-col w-full">
            <p>
            Contact {landlord.name} for the {listing.name.toLowerCase()}
            </p>
            <div>
                <textarea 
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white
                border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                name="message" 
                id="message" 
                rows="2"
                value={message}
                onChange={onChangeMessage}>

                </textarea>
            </div>

            <a href={`mailto:${landlord.email}? Subject=${listing.name}&body=${message}`}>
            <button
            className="px-7 py-3 bg-black text-white font-medium text-sm uppercase rounded shadow-md  hover:bg-opacity-80 hover:shadow-lg focus:shadow-lg w-full text-center transition duration-150 ease-in-out "
            >Send Message
            </button>
            </a>
        </div>
      )}
    </div>
  )
}
