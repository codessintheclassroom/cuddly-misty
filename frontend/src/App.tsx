import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';
import PetCard from './PetCard';
import Pet from './Pet';

/*var favoritePets = [
  { id: "1", name: "Berty", description: "Has a good nose for choclates" },
  { id: "2", name: "Argo", description: "Batman (of the dog world)" },
  { id: "3", name: "Fred", description: "Only sleeps and eats..!" },
];*/

const App: React.FC = () => {
  const [pets, setPets] = useState<Array<Pet>>([]);

  useEffect(() => {
    const updatePets = async () => {
        const response = await fetch(`https://codess-shelter.azurewebsites.net/api/v1/pets`);
        const pets = await response.json();
        setPets(pets);
    };

    updatePets();
}, []);

  return (
    <Container>
    <Row>
    <Col>
      <CardColumns>
      {
        pets.map((pet) => <PetCard key={pet.id} pet={pet} />)
      }
      </CardColumns>
    </Col>
    </Row>
  </Container>
  );
}

export default App;
