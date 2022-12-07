import React, { createContext, useState } from 'react';
import { UserDetails } from '../utils/UserDB';

interface Props {
    children: JSX.Element | JSX.Element[] // un elemento jsx hijo | varios elementos jsx hijos
}

export const ContextMovies = createContext({});

const Context = ({children} : Props) => {

  const [searchToggle, setSearchToggle] = useState(false);

  const [searchMoviesByUser, setSearchMoviesByUser] = useState('');

  const showSearch = () => {
    if(searchToggle === false){
      setSearchToggle(true)
    } else {
      setSearchToggle(false)
    }
  }

  const [auth, setAuth] = useState<UserDetails | void | string>("");

  const login = (userDB : UserDetails) => {
    setAuth(userDB)
  }

  const logout = () => {
    setAuth("")
  }

  return (
    <ContextMovies.Provider
        value= {{
                  searchToggle, 
                  setSearchToggle, 
                  showSearch,
                  searchMoviesByUser,
                  setSearchMoviesByUser,
                  auth,
                  setAuth,
                  login,
                  logout
                }}
    >
        {children}
    </ContextMovies.Provider>
  )
}

export default Context