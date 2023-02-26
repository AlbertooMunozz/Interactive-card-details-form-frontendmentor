import React from 'react';
import { reducer, initialState } from '../Features/Reducer';


const Context = React.createContext();


export const useProvider = () => React.useContext(Context)


const Provider = ({children}) => {
    
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    ) 
}

export default Provider
