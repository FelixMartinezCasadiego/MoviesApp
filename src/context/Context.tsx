import React, { createContext, useState } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[] // un elemento jsx hijo | varios elementos jsx hijos
}

export const ContextMovies = createContext({});

const Context = ({children} : Props) => {

  const [searchToggle, setSearchToggle] = useState(false);

  const [searchMoviesByUser, setSearchMoviesByUser] = useState();

  const showSearch = () => {
    if(searchToggle === false){
      setSearchToggle(true)
    } else {
      setSearchToggle(false)
    }
  }

  return (
    <ContextMovies.Provider
        value= {{
                  searchToggle, 
                  setSearchToggle, 
                  showSearch,
                  searchMoviesByUser,
                  setSearchMoviesByUser
                }}
    >
        {children}
    </ContextMovies.Provider>
  )
}

export default Context