import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const ApplicationContext  = React.createContext();

export function ApplicationCtxProvider(props) { 
    const contextValue = {
      
    }
  return (
    <ApplicationContext.Provider value={contextValue}>
        {props.children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationContext;