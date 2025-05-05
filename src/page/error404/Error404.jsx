import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => (
  <Container className="notfound-container d-flex flex-column align-items-center justify-content-center">
    <Card className="p-4 text-center shadow-sm">
      <EyeOff size={48} className="mb-3 text-primary" />
      <Card.Title className="display-4">404</Card.Title>
      <Card.Text className="mb-4">
        ¡Uy! No encontramos la página que buscás.
      </Card.Text>
      <Button as={Link} to="/" variant="info" size="lg">
        Volver al inicio
      </Button>
    </Card>
  </Container>
);

export default Error404;
