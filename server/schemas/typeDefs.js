const { gql } = require ('apollo-server-express');

const typeDefs = gql` 

    type: Product {
        _id: ID
        productName: String!
        price: Int!
        stock: Int!
        description: String 
        categoryID: [Category]    
    }

    type: Category {
        _id: ID
        categoryName: String!
    }
    
    type: User {
        _id: ID
        name: String!
        password: String!
        email: String!
    }

    type: DM {
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

    type: Mutation {
        login (emailL String!, password: String!) : Auth
        addUser(username:String!, email: String!, password: String!) : Auth
        addItem(imput: addItemInput): DM
        removeItem(productId: String!) : USER
    }

`;

module.exports = typeDefs;