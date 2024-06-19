import { gql } from '@apollo/client';

export const UPDATE_POST = gql`
  mutation UpdatePost( $id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
    }
  }
`;