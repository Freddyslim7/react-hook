import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddMovie = ({add}) => {
    return (
        <div className='filter-cont'>
            <InputGroup className="mb-3">
                <InputGroup.Text onClick={add}>Add a new movie</InputGroup.Text>
                <Form.Control aria-label="Title" placeholder='Title'/>
                <Form.Control aria-label="Description" placeholder='Description'/>
                <Form.Control aria-label="PosterURL" placeholder='PosterURL'/>
                <Form.Control aria-label="Rating" placeholder='Rating'/>
            </InputGroup>
        </div >
    )
};



export default AddMovie;
