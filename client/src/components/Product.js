import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useMutation, useQuery, useEffect } from '@apollo/client';
// import { REMOVE_ITEM } from '../utils/mutations';
// import Auth from '../utils/auth';
import { ADD_ITEM } from '../utils/queries';
// import { ADD_ITEM } from '../utils/mutations';
import AddItem from '../pages/addItem';

const Product = ({ product }) => {
    // if (product) {
        const { loading, data, refetch } = useQuery(ADD_ITEM);
        const productData = data?.product || [];
        // useEffect(() => {
        //   refetch();
        // },[refetch]);
      
        
        // const productData = data?.item;
      
       
        // const [removeItem] = useMutation(REMOVE_ITEM);
      
        // // create function that accepts the book's mongo _id value as param and deletes the book from the database
        // const handleDeleteItem = async (itemId) => {
        //   const token = Auth.loggedIn() ? Auth.getToken() : null;
      
        //   if (!token) {
        //     return false;
        //   }
      
        //   try {
        //     await removeItem({variables: { itemId }});
      
        //     removeItemId(itemId);
      
        //     refetch();
      
        //   } catch (err) {
        //     console.error(err);
        //   }
      
        // };
      
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
