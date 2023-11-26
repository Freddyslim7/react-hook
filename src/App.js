import React, { useState } from 'react';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import './App.css';

const movielist = [
  {
    id: '3',
    title: 'Doctor Strange in the Multiverse of Madness', 
    description: `Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.`, 
    posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5IuxfEt-WmUIrpJldszdRJFfTubSEeQVMVNuv63Z0PNfvbWV', 
    rating: '3' 
  },
  {
    id: '1',
    title: 'Top Gun Maverick', 
    description: `After more than 30 years of service as one of the Navy's top aviators, Pete "Maverick" Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. Training a detachment of graduates for a special assignment, Maverick must confront the ghosts of his past and his deepest fears, culminating in a mission that demands the ultimate sacrifice from those who choose to fly it.`, 
    posterURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLeDZOOOe39EylZoDSJteMkbX8lqS4JT-SvEZ8W2M6s1DRBZMd', 
    rating: '4' 
  },
  {
    id: '2',
    title: 'Doctor Strange in the Multiverse of Madness', 
    description: `Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.`, 
    posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5IuxfEt-WmUIrpJldszdRJFfTubSEeQVMVNuv63Z0PNfvbWV', 
    rating: '5' 
  }
]

function App() {
  const [list, setList] = useState(movielist)

  const sortByTitle = () => {
    const toSort = movielist
    const newList = toSort.sort((a, b) => {
    let fa = a.title.toLowerCase();
    let fb = b.title.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
    setList([...newList])
  }

  const sortByRatings = () => {
    const toSort = movielist
    const newList = toSort.sort((a, b) => {
      return a.rating - b.rating
    });
    setList([...newList])
  }

  const handleFilter = (e) => {
    if(e.target.value === 'title') {
      sortByTitle()
    }else if (e.target.value === 'rating') {
      sortByRatings()
    }else {
      setList([...movielist])
    }
  }

  return (
    <main>
      <div>
        <label>Filter By:</label>
        <Filter handleFilter={handleFilter} />
      </div>
      <MovieList list={list} />
    </main>
  );
}

export default App;
