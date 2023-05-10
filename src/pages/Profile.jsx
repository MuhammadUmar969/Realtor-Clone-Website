import React, { useState, useEffect } from 'react'
import { getAuth, updateProfile} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { collection, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore';
import {db} from '../firebase';
import {FcHome} from 'react-icons/fc'
import { Link } from 'react-router-dom';
import ListingItems from '../components/ListingItems';

const Profile = () => {

  const auth = getAuth();
  const navigate = useNavigate();

  const [changeDetails, setChangeDetails] = useState(false);

  const [listings, setListings] = useState(null);

  const [loading , setLoading] = useState(true);

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

  useEffect(() => {
    async function fetchUserListings() {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
    }
    fetchUserListings();
  }, [auth.currentUser.uid]);
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
      <div className="max-w-6xl px-3 mt-6 mx-auto">
        {!loading && listings.length > 0 && (
          <>
            <h2 className="text-2xl text-center font-semibold mb-6">
            My Listings
            </h2>

            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            2xl:grid-cols-5 mt-6 mb-6">
            {listings.map((listing) => (
                <ListingItems
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  )
}

export default Profile;
