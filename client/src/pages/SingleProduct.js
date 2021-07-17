import React from 'react';
import { CardColumns, Card } from 'react-bootstrap';

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
  return (
    <CardColumns>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title className='p-3 col-2' id={product.productId}>{product.name}</Card.Title>
            <Card.Text id={product.productId}>{product.description}</Card.Text>
            <Card.Text className='p-3 col-8' id={product.productId}>Price:<br />{product.price}</Card.Text>
            <Card.Text className='p-3 col-1' id={product.productId}>Stock:<br />{product.stock}</Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
    // <div className="my-3">
    //   <h3 className="card-header bg-dark text-light p-2 m-0">
    //     {product.productName} <br />
    //   </h3>
    //   <div className="bg-light py-4">
    //     <blockquote
    //       className="p-4"
    //       style={{
    //         fontSize: '1.5rem',
    //         fontStyle: 'italic',
    //         border: '2px dotted #1a1a1a',
    //         lineHeight: '1.5',
    //       }}
    //     >
    //       {product.description}
    //     </blockquote>
    //   </div>
    // </div>
  );
};

export default SingleProduct;