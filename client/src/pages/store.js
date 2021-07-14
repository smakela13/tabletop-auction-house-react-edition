import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {  useQuery } from '@apollo/client';
// import { REMOVE_ITEM } from '../utils/mutations';
import { QUERY_PRODUCTS } from '../utils/queries';


const Product = () => {
    // if (product) {
        const { loading, data } = useQuery(QUERY_PRODUCTS);
        const product = data?.product || [];


      
        if (loading) {
          return <h2>We're loading, have some patience</h2>;
        }
        return (
            // <Card> ELISE: id's need to be actual ids! Idk how to do this rn
                    <ListGroup horizontal >
                        <ListGroup.Item className='p-3 col-2' id={product.productId}>{product.name}</ListGroup.Item>
                        <ListGroup.Item className='p-3 col-8' id={product.productId}>{product.description}</ListGroup.Item>
                        <ListGroup.Item className='p-3 col-1' id={product.productId}>Price:<br/>{product.price}</ListGroup.Item>
                        <ListGroup.Item className='p-3 col-1' id={product.productId}>Stock:<br />{product.stock}</ListGroup.Item>
                    </ListGroup> 
            // </Card>
        );
    
}

export default Product;