import React, {createContext, useReducer} from 'react';
import { moviesInitialState, moviesReducer } from './MoviesState'

export const GlobalContext = createContext();



export const GlobalContextProvider = (props) => {

    const [movies, moviesDispatch] = useReducer(moviesReducer, moviesInitialState);
  
    const state = {
        movies
    };
  
    const dispatch = {
        moviesDispatch,
    };
  
    return (
      <GlobalContext.Provider value={{state, dispatch}}>
          {props.children}
      </GlobalContext.Provider>
    );
  };