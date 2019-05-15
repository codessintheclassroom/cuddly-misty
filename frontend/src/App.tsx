import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';
import PetCard from './PetCard';

var favoritePets = [
  { id: "1", name: "Berty", description: "Has a good nose for choclates" },
  { id: "2", name: "Argo", description: "Batman (of the dog world)" },
  { id: "3", name: "Fred", description: "Only sleeps and eats..!" },
];

const App: React.FC = () => {
  return (
    <Container>
    <Row>
    <Col>
      <CardColumns>
      {
        favoritePets.map((pet) => <PetCard key={pet.id} pet={pet} />)
      }
      </CardColumns>
    </Col>
    </Row>
  </Container>
  );
}

export default App;
