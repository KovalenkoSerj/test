import React, { useContext } from 'react'
import './App.css'
import 'h8k-components'
import { GlobalContext } from "./context/GlobalContext";
import { Movieform, Movieslist, Search } from './components'


const title = 'Favorite Movie Directory'

function App() {
  const {  state: { movies: { movies, searchTerm }  } } = useContext(GlobalContext);
  

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform />
        </div>
        <div className='layout-column w-30'>
          <Search />
          {
            movies.length ?  
            movies.map((el, index) =>{
       
                return el.movieName.toLowerCase().includes(searchTerm) && <Movieslist key={index} movieName={el.movieName} movieRaiting={el.ratings} movieDuration={el.duration}/>
         
              
            }) 
            : 
            <div data-testid='noResult'>
              <h3 className='text-center'>No Results Found</h3>
            </div>
          }
         
        </div>
      </div> 
    </div>
  )
}

export default App;
