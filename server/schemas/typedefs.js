const { gql } = require ('apollo-server-express');

// add type Auth

const typeDefs = gql` 
    type Product {
        _id: ID
        productName: String!
        price: Int!
        stock: Int!
        description: String 
        categoryID: [Category]    
    }
    type Category {
        _id: ID
        categoryName: String!
    }
    
    type User {
        _id: ID
        name: String!
        password: String!
        email: String!
    }

    type Auth {
        token: ID
        user: User
      }

    type GM {
        _id: ID
        name: String!
        password: String!
        email: String!
    }
    input addItemInput {
        productName: String!
        price: Int!
        stock: Int!
        description: String 
        categoryID: [Category] 
    }
    type Mutation {
        login (email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addItem(input: addItemInput): GM
        removeItem(productId: String!): User
    }
    type Query {
        products(productName: String): [Product]
        product(_id: ID!): Product
        users: [User]
        user: User
        me: User
      }
`;

module.exports = typeDefs; 
