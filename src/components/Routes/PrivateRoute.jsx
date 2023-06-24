import React from "react"
import { Route, Navigate, useLocation } from "react-router-dom"
import PrivateLayout from "layouts/PrivateLayout";
import { useAuth } from "contexts/AuthContext";
import PageLoading from "views/PageLoading";

export default function PrivateRoute(props){
  //required to pass the props since we are encapsulating the main function in this default function
  return PrivateWrapper(props);
}

/**
 * 04/14/2022:
 * As per the comment, above this is a route that will enable us to utilize the <Outlet/> component
 * 
 * Usage: 
 * <Route element={<PrivateWrapper />}><Route path="/dashboard" element={<Dashboard />} /></Route>
*/
const PrivateWrapper = (props) => {
  const path = useLocation().pathname;
  const auth = useAuth();
  console.log(auth);
  if(path==="/app" || path==="/app/"){
    return <Navigate to="/app/dashboard"/>
  }else{
    return (
      auth.loading ? <PageLoading/> : !auth.userSessionExpired ? <PrivateLayout {...props}></PrivateLayout> : <Navigate to="login" />
    );  
  }
};