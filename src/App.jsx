import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Forgot from './pages/Forgot';
import Offers from './pages/Offers';
import Header from './components/Header';
import CreateListing from './pages/CreateListing';
import EditListing from './pages/EditListing';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Listing from './pages/Listing';

const App = () => {
  return (
    <>
     <Router>
     <Header />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/profile" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile/>}/>    
        </Route>   
        <Route path="/sign-in" element={<SignIn/>}/>    
        <Route path="/sign-up" element={<SignUp/>}/>    
        <Route path="/forgot-password" element={<Forgot/>}/>    
        <Route path="/offers" element={<Offers/>}/>    
        <Route path="/category/:categoryName/:listingId" element={<Listing/>}/>    
        <Route path="/create-listing" element={<PrivateRoute/>}>
        <Route path="/create-listing" element={<CreateListing/>}/>    
        </Route>
        <Route path="/edit-listing" element={<PrivateRoute/>}>
        <Route path="/edit-listing/:listingId" element={<EditListing/>}/>    
        </Route>
      </Routes>
     </Router>
     <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </>
  )
}

export default App;
