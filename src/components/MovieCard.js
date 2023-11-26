const MovieCard = ({ title, description, posterURL, rating }) => {
    return (
      <li>
        <img src={posterURL} alt={title} width={100}  />
      <h3>{title}</h3>
        <p>{description}</p>
        <p>{rating}/5</p>
      </li>
    )
  }
  
  export default MovieCard