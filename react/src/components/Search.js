import React, { useContext, } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function Search() {
  const {  dispatch: { moviesDispatch } } = useContext(GlobalContext);

  const handleChange = (e) => { 
    moviesDispatch({type: "SEARCH_MOVIE", payload: e.target.value})
  }

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        onChange={(e) => handleChange(e)}
      />
    </section>
  )
}

export default Search
