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
    category {
      _id
    }
    createdAt
  }
}
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query getSingleProduct($_id: ID!) {
    product(_id: $_id) {
      _id
      productName
      price
      stock
      description
      category {
        _id
      }
      createdAt
    }
  }
`;

export const QUERY_SINGLE_CATEGORY = gql`
  query category($_id: ID!) {
    product(_id: $_id) {
      _id
      value
      label
    }
  }
  `;
     



export const QUERY_PRODUCTS_AND_CATEGORIES = gql`
query productCategories($_id: ID!) {
  products(_id: $_id) {
    _id
    productName
    price
    stock
    description
    category {
      _id
    }
    createdAt
  }
  category {
    _id
  }
}
`;