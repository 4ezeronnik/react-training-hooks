import { createContext, useState, useRef } from "react";

export const valueContext = createContext();

export const ValueContextProvider = ({ children }) => {
    const [value, setValue] = useState(null)
    const ref = useRef(value);
    console.log('ref', ref);
    console.log('value', value);

    return (
 <valueContext.Provider value={{value, setValue}}>
            {children}
            </valueContext.Provider>
    )
}
