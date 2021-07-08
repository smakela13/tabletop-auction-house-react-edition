import React from 'react';
import { Card, Col } from 'react-bootstrap';

// xs={6} md={2}
const Product = ({ product }) => {
    if (product) {
        return (
            <Col >
                <Card className="d-flex justify-content-center">
                    <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
							<Card.Text>{product.description}</Card.Text>
							<Card.Text>{product.price}</Card.Text>
							<Card.Text>{product.stock}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    return null;
}

export default Product;