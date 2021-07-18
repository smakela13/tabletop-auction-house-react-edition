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
  mutation addProduct($productName: String!, $price: String!, $stock: String!, $description: String!, $category: String!) {
    addProduct(productName: $productName, price: $price, stock: $stock, description: $description, category: $category) {
      _id
      productName
      price
      stock
      description
      category
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
export const UPDATE_PRODUCT = gql`
mutation updateProduct(
    $_id: ID!,
    $productName: String,
    $price: String,
    $stock: String,
    $description: String,
    $category: String,
 ) {
  updateProduct(input: {
    _id: $_id,
    productName: $productName
    price: $price
    stock: $stock
    description: $description
    category: $category
  }) {
    _id
  }
 }
 `;

export const REMOVE_PRODUCT = gql`
mutation removeProduct($_id: ID!) {
  removeProduct(_id: $_id) {
    _id
  }
}
`;

// export const REMOVE_PRODUCT = gql`
//   mutation removeProduct($productId: ID!) {
//       removeProduct(productId: $productId) {
//         _id
//         productName
//         description
//         price
//         stock
//     }
//   }
// `;