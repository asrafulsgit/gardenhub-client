import {  createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail
  } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider();
import {app} from "./firebase_config";
import { ToastContainer } from "react-toastify";
import { apiRequiestWithCredentials } from "../utils/ApiCall";



const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children})=>{
    const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDark')))
    const [userInfo,setUserInfo]=useState(null)
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [loading,setLoading]=useState(true)
    

   const handleLoginWithGoogle =async()=>{
           const provider = new GoogleAuthProvider();
           try {
             const result = await signInWithPopup(auth, provider);
             const token = await result.user.getIdToken();
     
            const data = await apiRequiestWithCredentials('post','/user/google/login',{token});
            setUserInfo(data.user)
            return true;
           } catch (err) {
             console.error("Google login failed:", err);
             return false;
           }
       }

         const forget_password =async(email)=>{
           try {
             return await sendPasswordResetEmail(auth, email);
           } catch (error) {
              ToastContainer.error(error)
           }
         }
         
         const userObserver=async()=>{
             try {
               const data = await apiRequiestWithCredentials('get','/user/observer');
               setUserInfo(data?.user)
               setIsLoggedIn(true)
               setLoading(false)
             } catch (error) {
               setIsLoggedIn(false)
               setUserInfo(null)
               setLoading(false)
             }
         }
         
         useEffect(() => {
           userObserver()
         }, []);
    
    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,
          forget_password,
        loading,setLoading,handleLoginWithGoogle,
        userInfo,setUserInfo,isDark,setIsDark}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext,AuthProvider}