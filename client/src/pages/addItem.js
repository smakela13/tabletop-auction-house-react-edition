import React from 'react';
import { useQuery } from '@apollo/client';

import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

import { QUERY_PRODUCTS } from '../utils/queries';

const AddItem = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ProductForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProductList
              products={products}
              title="Some Feed for Product(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default AddItem;
