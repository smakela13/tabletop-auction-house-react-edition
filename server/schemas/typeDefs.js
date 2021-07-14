const { gql } = require('apollo-server-express');

const typeDefs = gql` 
    type Product {
        productId: ID!
        productName: String!
        price: Int!
        stock: Int!
        description: String 
        categoryID: [Category]    
    }
    
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
    }

    type GM {
        _id: ID!
        name: String!
        password: String!
        email: String!
    }

    input addItemInput {
        productName: String!
        price: Int!
        stock: Int!
        description: String 
    }

    type Mutation {
        login (email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addItem(productData: addItemInput!): Auth
        removeItem(productId: String!): User
    }
`;

module.exports = typeDefs;
