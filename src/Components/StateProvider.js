// setup data layer
// Tracking basket

import React, {createContext, useContext, useReducer} from 'react';



// Data Layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({reducer, initialState, children})=>(
<StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);

// to use it inside a component

export  const useStateValue = () => useContext(StateContext);



