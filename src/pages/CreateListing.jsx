import React, { useState } from 'react'

const onChange = (e) => {
 e.preventDefault();
} 

const onChangeInput = () => {

}

const onChangeNumber = () => {

}

const CreateListing = () => {

  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms:1,
    parking: false,
    furnished: false,
    Address: "",
    description:"",
    offer:true,
    regularPrice:0,
    discountPrice:0,
  });

  const {type, name, bedrooms, bathrooms, parking, furnished, Address,
        description, offer, regularPrice, discountPrice} = formData;

  return (
    <>
      <main className="max-w-md px-2 mx-auto">
        <h1 className="text-3xl text-center text-white font-bold mt-6">
        Create a Listing</h1>
        <form>
          <p className="text-lg font-semibold mt-6">
          Sell / Rent
          </p>
          <div className="flex">
             <button 
             type="submit" 
             id="type" 
             value="sale" 
             onClick={onChange}
             className={`mr-3 px-7 py-3 font-medium text-md uppercase shadow-md rounded
             hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150
             ease-in-out w-full ${
              type === "rent" ? "bg-white" : "bg-slate-600 text-white"
             }`}>
              Sell
             </button>
             <button 
             type="submit" 
             id="type" 
             value="sale" 
             onClick={onChange}
             className={`ml-3 px-7 py-3 font-medium text-md uppercase shadow-md rounded
             hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150
             ease-in-out w-full ${
              type === "sell" ? "bg-white" : "bg-slate-600 text-white"
             }`}>
              rent
             </button>
          </div>
          <p className="mt-6 text-lg font-medium">
          Name
          </p>
          <input 
          type="text" 
          id="name" 
          value={name} 
          placeholder="Name"
          maxLength="32" 
          minLength="10" 
          onChange={onChangeInput} 
          required
          className="w-full px-4 py-2 text-xl text-gray-600 bg-white border 
          border-gray-300 rounded transition duration-150 ease-in-out
          focus:text-gray-700 focus:border-slate-600 mb-6 focus:bg-white"/>
          
          <div className="flex space-x-6 mb-6">
             <div>
                <p className="text-lg font-semibold">
                Beds
                </p>
                <input 
                type="number" 
                id="bedrooms" 
                value={bedrooms}
                onChange={onChangeNumber} 
                min="1" 
                max="50" 
                required
                className="w-full px-4 py-2 text-xl text-gray-600 bg-white border 
                border-gray-300 rounded transition duration-150 ease-in-out
                focus:bg-white focus:yext-gray-700 focus:border-slate-600 text-center"/>
             </div>
             <div>
                <p className="text-lg font-semibold">
                Baths
                </p>
                <input 
                type="number" 
                id="bathrooms" 
                value={bathrooms}
                onChange={onChangeNumber} 
                min="1" 
                max="50" 
                required
                className="w-full px-4 py-2 text-xl text-gray-600 bg-white border 
                border-gray-300 rounded transition duration-150 ease-in-out
                focus:bg-white focus:yext-gray-700 focus:border-slate-600 text-center"/>
             </div>

          </div>
          <p className="text-lg font-semibold mt-6">
          Parking spot
          </p>
          <div className="flex">
             <button 
             type="submit" 
             id="parking" 
             value={true} 
             onClick={onChange}
             className={`mr-3 px-7 py-3 font-medium text-md uppercase shadow-md rounded
             hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150
             ease-in-out w-full ${
              !parking ? "bg-white" : "bg-slate-600 text-white"
             }`}>
              Yes
             </button>
             <button 
             type="submit" 
             id="parking" 
             value={false} 
             onClick={onChange}
             className={`ml-3 px-7 py-3 font-medium text-md uppercase shadow-md rounded
             hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150
             ease-in-out w-full ${
              parking ? "bg-white" : "bg-slate-600 text-white"
             }`}>
              No
             </button>
          </div>

          <p className="text-lg font-semibold mt-6">
          Furnished
          </p>
          <div className="flex">
             <button 
             type="submit" 
             id="furnished" 
             value={true} 
             onClick={onChange}
             className={`mr-3 px-7 py-3 font-medium text-md uppercase shadow-md rounded
             hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150
             ease-in-out w-full ${
              !furnished ? "bg-white" : "bg-slate-600 text-white"
             }`}>
              Yes
             </button>
             <button 
             type="submit" 
             id="furnished" 
             value={false} 
             onClick={onChange}
             className={`ml-3 px-7 py-3 font-medium text-md uppercase shadow-md rounded
             hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150
             ease-in-out w-full ${
              furnished ? "bg-white" : "bg-slate-600 text-white"
             }`}>
              no
             </button>
          </div>

          <p className="mt-6 text-lg font-medium">
          Address
          </p>
          <textarea 
          type="text" 
          id="address" 
          value={Address} 
          placeholder="Address"
          onChange={onChangeInput} 
          required
          className="w-full px-4 py-2 text-xl text-gray-600 bg-white border 
          border-gray-300 rounded transition duration-150 ease-in-out
          focus:text-gray-700 focus:border-slate-600 mb-6 focus:bg-white"/>

          <p className="text-lg font-medium">
          Description
          </p>
          <textarea 
          type="text" 
          id="description" 
          value={description}
          placeholder="Description"  
          onChange={onChangeInput}
          required 
          className="w-full px-4 py-2 text-xl text-gray-600 bg-white-border
          border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700
          focus:border-slate-600 mb-6 focus:bg-white" />

        <p className="text-lg font-semibold">
        Offer
        </p>
          <div className="flex">
             <button 
             type="submit" 
             id="offer" 
             value={true} 
             onClick={onChange}
             className={`mr-3 px-7 py-3 font-medium text-md uppercase shadow-md rounded
             hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150
             ease-in-out w-full ${
              !offer ? "bg-white" : "bg-slate-600 text-white"
             }`}>
              Yes
             </button>
             <button 
             type="submit" 
             id="offer" 
             value={false} 
             onClick={onChange}
             className={`ml-3 px-7 py-3 font-medium text-md uppercase shadow-md rounded
             hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150
             ease-in-out w-full ${
              offer ? "bg-white" : "bg-slate-600 text-white"
             }`}>
              no
             </button>
          </div>
          <div className="mt-6 flex items-center mb-6">
            <div>
              <p className="text-lg font-medium">
              Regular Price
              </p>
              <div 
              className="flex w-full justify-center items-center space-x-6">
                 <input 
                 type="number" 
                 id="regularPrice" 
                 value={regularPrice}
                 onChange={onChange}
                 min="50"
                 max="400000000"
                 required
                 className="w-full px-4 py-2 text-xl text-gray-600 bg-white
                 border border-gray-300 rounded transition duration-150 ease-in-out
                 focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                 />
                 {type ==="rent" &&(
                <div className="">
                   <p className="text-md w-full whitespace-nowrap">
                    $ / Month
                    </p>
                </div>
              )}
              </div>
            </div>
          </div>
          {offer && (
            <div className="mt-6 flex items-center mb-6">
            <div>
              <p className="text-lg font-medium">
              Discount Price
              </p>
              <div 
              className="flex w-full justify-center items-center space-x-6">
                 <input 
                 type="number" 
                 id="discountPrice" 
                 value={discountPrice}
                 onChange={onChange}
                 min="50"
                 max="400000000"
                 required = {offer}
                 className="w-full px-4 py-2 text-xl text-gray-600 bg-white
                 border border-gray-300 rounded transition duration-150 ease-in-out
                 focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                 />
                 {type ==="rent" &&(
                <div className="">
                   <p className="text-md w-full whitespace-nowrap">
                    $ / Month
                    </p>
                </div>
              )}
              </div>
            </div>
          </div>
          )}
          <div>
            <p className="text-lg font-semibold">Images</p>
            <p className="text-gray-900">The first image will be cover (max 6)</p>
             <input 
             type="file" 
             id="images"
             onChange={onChange}
             accept=".png, .jpg, .jpeg"
             multiple
             required
             className="w-full px-3 py-1.5 text-gray-700 bg-white
             border border-gray-300 rounded transition duration-150
             ease-in-out focus:bg-white focus:border-slate-600"/>
          </div>
          <button type="submit" className=" mt-6 mb-6 w-full bg-black text-white px-7 py-3
          uppercase font-medium shadow-md text-sm rounded hover:bg-opacity-80
          transition duration-150 ease-in-out hover:shadow-lg active:bg-opacity-50">
           Create listing
          </button>
        </form>
      </main>
    </>
  )
}

export default CreateListing;
