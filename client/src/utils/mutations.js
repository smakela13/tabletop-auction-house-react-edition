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
  mutation addItem($productName: String!, $price: Int!, $stock: Int!, $description: String, $categoryName: [String]) {
      product
      category {
        categoryID
        categoryName
      }
  
  }
`;
export const REMOVE_ITEM = gql`
  mutation removeItem($productId: String!) {
    removeItem(productId: $productID)
      savedProducts {
        productName
        price
        stock
        description
      }
  }
`;
