import React from 'react';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_SINGLE_ITEM } from '../utils/queries';

const SingleItem = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { itemtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_ITEM, {
    // Pass the `itemtId` URL parameter into query to retrieve this itemt's data
    variables: { itemtId: itemtId },
  });

  const itemt = data?.itemt || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {itemt.itemtAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this itemt on {itemt.createdAt}
        </span>
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
          {itemt.itemtText}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleItem;