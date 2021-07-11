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
export const ADD_ITEM = gql`
  mutation addItem($productName: String!, $price: Int!, $stock: Int!, $description: String, $categoryID: [String]) {
    addItem(productName: $productName: String!, $price: Int!, $stock: Int!, $description: String, $categoryID: [String]) {
      _id
      categoryID
    }
  }
`;
export const REMOVE_ITEM = gql`
    mutation removeItem($_Id: String!) {
        removeItem(_Id: $_Id) {
            productName
            addedProduct {
                _ID
                productName
                description
                stock
                price
            }
        }
    }
`;