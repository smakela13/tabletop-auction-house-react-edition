import React from 'react';
import { Container, CardGroup, Row, Col } from 'react-bootstrap';

export default function Store() {
    return (
        <Container>
            <CardGroup id="product">
                <Row >
                    {renderProducts()}
                </Row>
            </CardGroup>
        </Container>
    );
};
