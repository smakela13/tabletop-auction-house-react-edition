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
  mutation addProduct($productText: String!, $productAuthor: String!) {
    addProduct(productText: $productText, productAuthor: $productAuthor) {
      _id
      productText
      productAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;