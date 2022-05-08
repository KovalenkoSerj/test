import React, { useContext, useState} from 'react'
import { GlobalContext } from "../context/GlobalContext";

function Movieform() {
  const {  dispatch: { moviesDispatch } } = useContext(GlobalContext);
  const [movieName, setMovieName] = useState('');
  const [ratings, setRaitings] = useState(0);
  const [duration, setDuration] = useState('');

  const handleSubmit =  () => {
    const movie = {
      movieName,
      ratings,
      duration
    }
    setMovieName('')
    setRaitings(0)
    setDuration('')
    moviesDispatch({type: 'ADD_MOVIE', payload: movie});
  }




  return (

    <section>
     
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={movieName}
              onChange={e => setMovieName(e.target.value)}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={ratings}
              onChange={e => setRaitings( Math.trunc(+e.target.value))}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              value={duration}
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              onChange={e => setDuration(e.target.value)}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick={handleSubmit}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
