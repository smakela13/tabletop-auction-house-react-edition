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
  query getProducts {
    products {
      _id
      productName
      price
      stock
      description
      createdAt
    }
  }
`;