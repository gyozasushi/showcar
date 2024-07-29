// src/components/Showroom.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import videodata from '../../components/Home/Homedata'; // Sesuaikan path jika diperlukan

const Showroom = () => {
  const products = videodata(); // Mengambil data dari fungsi

  return (
    <section className="section-showroom">
      <Container className="my-5">
        <Row>
          {products.map(product => (
            <Col key={product.id} md={6} lg={3} className="mb-5">
              <Card className="shadow-sm h-100" style={{ height:"100%", width: '100%', transition: 'box-shadow 0.3s ease' }}>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={product.gambar} alt={product.title} className="card-img" />
                </div>
                <Card.Body>
                  <Card.Title style={{fontFamily:"Poppins",fontWeight:700}}>{product.title}</Card.Title>
                  <Card.Text><strong>Speed:</strong> {product.speed}</Card.Text>
                  <Card.Text><strong>Engine:</strong> {product.mesin}</Card.Text>
                  <Card.Text><strong>Price:</strong> {product.price}</Card.Text>
                  <Card.Img variant="top" src={product.logo} alt={`${product.title} Logo`} style={{ width: '50px' }} />
                  <Card.Img variant="top" src={product.bendera} alt={`${product.title} Flag`} style={{ marginLeft:"20px",width: '50px' }} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section> 
  );
};

export default Showroom;
