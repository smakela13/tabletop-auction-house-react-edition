import { gql } from '@apollo/client';

export const GET_ME = gql`
query {
    me {
        _id
        username
        email
        }
    }
}
`;

export const ADD_ITEM = gql`
    query{
        product {
            productName
            description
            price
            stock
            category {
                categoryName
                categoryId
            }
        }
    }
`;
