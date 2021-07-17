import React from 'react';

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
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
<<<<<<< HEAD
        {itemt.itemtAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this itemt on {itemt.createdAt}
        </span>
=======
        {product.productName} <br />
>>>>>>> 914b6b4d8785d75ce5d137093b1b004808d98834
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
<<<<<<< HEAD
          {itemt.itemtText}
=======
          {product.description}
>>>>>>> 914b6b4d8785d75ce5d137093b1b004808d98834
        </blockquote>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SingleItem;
=======
export default SingleProduct;
>>>>>>> 914b6b4d8785d75ce5d137093b1b004808d98834
