const { gql } = require('apollo-server-express');

const typeDefs = gql`     

type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
}

type Auth {
    token: ID!
    user: User
}

type GM {
    _id: ID!
    name: String!
    password: String!
    email: String!
}

type Product {
    _id: ID
    productName: String
    price: String
    stock: String
    description: String
    category: Category
    createdAt: String
}

type Category {
    _id: ID!
    name: String!
}

input UpdateProductInput {
    _id: ID
    productName: String
    price: String
    stock: String
    description: String
    category: String
}

type Query {
    me: User
    users: [User]
    user(_id: String, username: String): User
    products: [Product]!
    product(productId: ID!): Product
    categories: [Category]
}

 type Mutation {
    login (email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProduct(productName: String!, price: String!, stock: String!, description: String!, category: ID!): Product
    updateProduct(input: UpdateProductInput!): Product
    removeProduct(_id: ID!): Product
}
`;

module.exports = typeDefs;
