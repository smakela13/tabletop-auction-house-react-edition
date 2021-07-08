import Product from '../components/Product';
import React from 'react';
import Navigation from '../components/Navbar';
import { Container, CardGroup, Row, Col } from 'react-bootstrap';

const products = [
    {
    name: 'E-11 Blaster Rifle',
    description: 'A standard issue E-11 Blaster, common amongst the Galactic Empire Ground and Marine Forces',
    price: '1500',
    stock: '50',
    },
    {
    name: 'Jaegerspas XV',
    description: 'The SPAS-15 semi-automatic shotgun looks and fires more like an assault rifle than a traditional shotgun',
    price: '513',
    stock: '5',
        },
    

]

const renderProducts = () => {
    return (
        products.map((product, i) => {
            return (
                <Product product={product} key={i} />
            );
        })
    )}


const Store = () => {
    return (
        <>
        {renderNavigation()}
        <Container>
            <CardGroup id="product">
                <Row >
                    {renderProducts()}
                </Row>
            </CardGroup>
        </Container>
        </>
    );
}

export default Store;