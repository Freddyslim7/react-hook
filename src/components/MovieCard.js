import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

// const handleDelete = (key) => {
// moviesObj.splice(key, 1)
// }

// title, description, posterURL, rating

const MovieCard = ({ title, description, posterUrl, rating, del }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={posterUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{rating}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#" onClick={del}>Delete Movie</Card.Link>
                </Card.Body>
            </Card>

        </>
    )
};

export default MovieCard;