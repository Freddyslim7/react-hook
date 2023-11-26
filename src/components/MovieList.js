import MovieCard from './MovieCard'

const MovieList = ({ list }) => {
  return (
    <ul>
      {
        list.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))
      }
    </ul>
  )
}

export default MovieList