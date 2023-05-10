import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocationOn } from "react-icons/md";

export default function ListingItems({listing, id}) {
  return (
    <li className="bg-white flex flex-col justify-between items-center shadow-md
    hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150
    m-[10px]">
        <Link
           className="contents" 
           to={`/category/${listing.type}/${id}`}>
            <img 
            className="h-[170px] w-full object-cover hover:scale-105 transition-scale
            duration-200 ease-in"
            loading="lazy"
            src={listing.imgUrls[0]}/>
            
            <div className="w-full p-[10px]">
              <div className="flex items-center space-x-1">

                  <MdLocationOn className="h-4 w-4 text-green-600"/>

                  <p 
                  className="text-sm font-semibold mb-[2px] text-gray-600 truncate">
                  {listing.address}
                  </p>

              </div>

              <p 
              className="font-semibold m-0 text-xl truncate">
              {listing.name}
              </p>

              <p
              className="text-[#457b9d] mt-2 font-semibold "> 
              ${listing.offer
               ? listing.discountedPrice 
                   .toString()
                   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
               : listing.regularPrice
                   .toString()
                   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                   {listing.type === "rent" && "/month"}
               </p>

               <div className="flex items-center mt-[10px] space-x-3">
                <div className="flex items-center space-x-1">
                  <p
                  className="font-bold text-xs">
                  {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}
                  </p>
                </div>
                <div className="font-bold text-xs">
                  <p>{listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}</p>
                </div>
               </div>
            </div>
        </Link>
    </li>
  )
}