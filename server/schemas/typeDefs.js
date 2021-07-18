const { gql } = require('apollo-server-express');

const typeDefs = gql`     
    type Category {
        categoryId: ID!
        categoryName: String!
    }
    
    type User {
        _id: ID!
        username: String!
        password: String!
        email: String!
        productCount: Int
        
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(_id: String, username: String): User
        products: [Product]!
        product(productId: ID!): Product
    }

    input UpdateProductInput {
        _id: ID
        productName: String
        price: String
        stock: String
        description: String
        category: String
    }

    type GM {
        _id: ID!
        name: String!
        password: String!
        email: String!
    }

    type Mutation {
        login (email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addProduct(productName: String!, price: String!, stock: String!, description: String!, category: String!): Product
        addComment(productId: ID!, commentText: String!): Product
        updateProduct(input: UpdateProductInput!): Product
        removeProduct(_id: ID!): Product
        removeComment(productId: ID!, commentId: ID!): Product
    }

    type Product {
        _id: ID
        productName: String
        price: String
        stock: String
        description: String
        category: String!
        createdAt: String
        comments: [Comment]!
    }
    
    type Comment {
        _id: ID
        commentText: String
        createdAt: String
    }
`;

module.exports = typeDefs;
