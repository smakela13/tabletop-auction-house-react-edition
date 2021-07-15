import React from 'react';

const ProductList = ({ products, title }) => {
  if (!products.length) {
    return <h3>No Products Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {products &&
        products.map((product) => (
          <div key={product._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {product.productAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this product on {product.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{product.productText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
