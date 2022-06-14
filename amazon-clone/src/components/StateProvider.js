//contextAPI helps us to make application level states and we can get the data from those states through any component.

import { createContext,useContext,useReducer } from "react";

//preparing datalayers

export const StateContext = createContext()

//wrap the app and provides datalayer

export const StateProvider=({reducer,initialState,children})=> (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
        </StateContext.Provider>
)

//pulls data from data layer

export const useStateValue = () => useContext(StateContext)