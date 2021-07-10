import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Product = ({ product }) => {
    if (product) {
        return (
            // <Card> ELISE: id's need to be actual ids! Idk how to do this rn
                    <ListGroup horizontal >
                        <ListGroup.Item className='p-3 col-2' id={product.price}>{product.name}</ListGroup.Item>
                        <ListGroup.Item className='p-3 col-8' id={product.price}>{product.description}</ListGroup.Item>
                        <ListGroup.Item className='p-3 col-1' id={product.price}>Price:<br/>{product.price}</ListGroup.Item>
                        <ListGroup.Item className='p-3 col-1' id={product.price}>Stock:<br />{product.stock}</ListGroup.Item>
                    </ListGroup> 
            // </Card>
        );
    }

    return null;
}

export default Product;