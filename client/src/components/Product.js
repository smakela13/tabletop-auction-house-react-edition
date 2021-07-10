import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

const Product = ({ product }) => {
    if (product) {
        return (
            // <Card>
            <ListGroup horizontal >
                {/* <ListGroup.Item className='p-3 col-2'>
                    <Button
                        type='submit'
                        variant='success'>
                        DO A THING
                    </Button></ListGroup.Item> */}
                <ListGroup.Item className='p-3 col-2'>{product.name}</ListGroup.Item>
                <ListGroup.Item className='p-3 col-8'>{product.description}</ListGroup.Item>
                <ListGroup.Item className='p-3 col-1'>Price:<br />{product.price}</ListGroup.Item>
                <ListGroup.Item className='p-3 col-1'>Stock:<br />{product.stock}</ListGroup.Item>
            </ListGroup>
            // </Card>
        );
    }

    return null;
}

export default Product;