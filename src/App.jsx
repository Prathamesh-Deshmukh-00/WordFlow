import React, { useEffect, useState } from "react"
import './App.css'
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import {login ,Logout} from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
   const [loading , setloading] = useState(true);
   const dispatch = useDispatch();
     useEffect (()=>{
      authService.getCurrentUser().then((userData)=>{
        if(userData){
          dispatch(login({userData}));
        }else{
          dispatch(Logout())
        }
      }).finally(()=>setloading(false))
     },[])
 

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          <div className="w-full block">
            <Header/>
            <main>
              {/* {outlet} */}
            </main>
            <Footer/>
          </div>
        </div>
    ) : null 
}

export default App
