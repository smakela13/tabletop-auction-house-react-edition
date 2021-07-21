import { gql } from '@apollo/client';

export const GET_ME = gql`
query {
    me {
        _id
        username
        email
        }
    }
`;

export const QUERY_PRODUCTS = gql`
  query products {
    products {
      _id
      productName
      price
      stock
      description
      category
      createdAt
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query getSingleProduct($productId: ID!) {
    product(productId: $productId) {
      _id
      productName
      price
      stock
      description
      category
      createdAt
    }
  }
`;

export const QUERY_PRODUCTS_AND_CATEGORIES = gql`
query productCategories {
  products {
    _id
    productName
    price
    stock
    description
    category
    createdAt
  }
  categories {
    name
  }
}
`;