import { createContext, useContext, useReducer } from "react";
import React from 'react'

//Creo el contexto para poder pasar variables de un contexto a otro
export const StateContext = createContext();

//Herramienta que me permitira hacer lo anterior
export const StateProvider = ({ reducer, initialState, children }) => {
    return(
        <StateContext.Provider value={useReducer(reducer, initialState)}>
          {children}
        </StateContext.Provider>
    )
    
};

//Me permite consumir desde cq componente los cambios de estado
export const useStateValue = () => useContext(StateContext);