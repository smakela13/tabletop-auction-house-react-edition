import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($productName: String!, $price: String!, $stock: String!, $description: String!) {
    addProduct(productName: $productName, price: $price, stock: $stock, description: $description) {
      _id
      productName
      price
      stock
      description
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;