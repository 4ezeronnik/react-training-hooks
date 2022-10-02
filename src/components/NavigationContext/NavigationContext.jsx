import { createContext } from "react";
import { useState } from 'react';
import { helpers } from "helpers/helpers";


export const navigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
     const [component, setComponent] = useState(() => helpers.home);

  const handlerTumbler = (component) => {
      setComponent(component);
      
  }
    return (
       <navigationContext.Provider value={{handlerTumbler, component}}>
            {children}
            </navigationContext.Provider>
        
    )
}