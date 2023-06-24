import React, { useContext, useState, useEffect } from "react"
import ApplicationContext from "./ApplicationContext";


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const appContext = useContext(ApplicationContext);

  useEffect(function(){
    setTimeout(function(){
      setLoading(false)
    },500)
  },[])

  const value = {
    currentUser: currentUser,
    loading: loading
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}