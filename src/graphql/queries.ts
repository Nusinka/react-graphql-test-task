import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts { 
    posts(options: { paginate: { page: 1, limit: 10 } }) {
      data {
        id
        title
      }
    }
  }
`;