import React from 'react';
import { CardColumns, Card, ListGroup,  ListGroupItem  } from 'react-bootstrap';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PRODUCT } from '../utils/queries';

const SingleProduct = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { productId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    // Pass the `productId` URL parameter into query to retrieve this product's data
    variables: { productId: productId },
  });

  const product = data?.product || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  const url = `${document.location}`;

  if (url.endsWith(product._id)) {
    return (
			<CardColumns style={{ width: '18em', alignSelf: 'center' }}>
				<Card style={{backgroundColor: '#758084', padding:'5px'}}>
					{/* <Card.Img variant="top" src="holder.js/100px160" /> */}
					<Card.Body
						style={{
							textAlign: 'center',
							padding: '1em 1em',
							marginBottom: '1em',
							color: '#000'}}>
						<Card.Title
							id={product.productId}
							style={{ fontWeight: 'bold' }}>
							{product.productName}
						</Card.Title>
						<ListGroup>
              <ListGroupItem style={{backgroundColor: '#9DA5A8'}} id={product.productId}>Description<br />{product.description}</ListGroupItem>
              <ListGroupItem style={{backgroundColor: '#9DA5A8'}} id={product.productId}>Price<br />{product.price}</ListGroupItem>
              <ListGroupItem style={{backgroundColor: '#9DA5A8'}} id={product.productId}>Stock<br />{product.stock}</ListGroupItem>
            </ListGroup>
					</Card.Body>
				</Card>
			</CardColumns>
		);
  } else {
		return <></>;
  }
};

export default SingleProduct;