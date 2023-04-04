import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';


function CardDemo() {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://api.breakingbadquotes.xyz/v1/quotes')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADICAMAAADhopxgAAAAYFBMVEUNj9v///8clt32+/7Y7fl8wuvO6fgRkdv0+v7K5/ed0vBctOcWk9whmN4mmt4snd82ouGYz/Dm9PxLrORVsOWQzO+33vXn9Py94fWl1vJ1v+qv2vNIquTC4/aGx+1quulHq181AAABJ0lEQVR4nO3VW27CMBAFUE+TkFDeb1oo7H+XtekOKgVLcI4UKcrXvcqMnRIAAAAAAAAAAAAAAAAAAAAAAAAAAADAv/Vd2wzTWX6L+Kgd5hk+I9ptxOxtCjexTmkT07cpPEQ3T4v97lF4sY3DMbqU1nHqaycbySGiOXfLVAovp/GVZjFJ6RaH2sHG0nd5g6O5l8LnOOYPp1iltgz6y1p/T6L5yIUjLqksdLeOtnaosVx/Sse+iWt6HNfXsr+TW9nj17R63Ej7yGOcn3s5rfM8b2NZO9ho8j18Oj1mOZ/SfVvqd3mba8caT/89GZr21v/dw/vY9mkRca8d66l2McxrZ3ii3WWITe0Qz3Qdhq93+sEAAAAAAAAAAAAAAAAAAAAAAAAAAABU8QvEVwb7raRnTQAAAABJRU5ErkJggg==" />
      <Card.Body >
        <Card.Title>TITLE</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardDemo;