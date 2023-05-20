import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider';
import {
  collection,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";

export default function Home() {
     
   const [offerListings, setOfferListings] = useState(null); 

   useEffect(() => {
      async function fetchListings() {
        try {
          const listingRef = collection(db, "listings");
          const q = query(
            listingRef,
            where("offer", "==" , true),
            orderBy("timestamp", "desc"),
            limit(4)
          );

          const querySnap = await getDocs(q);
          let listings = [];

          querySnap.forEach((doc) => {
            return listings.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setOfferListings(listings);
          console.log(setOfferListings);

        } catch (error) {
          console.log(error);
        }
      }
      fetchListings();
   }, [])

  return (
    <div>
      <Slider />
    </div>
  )
}

