import { gql } from '@apollo/client';
import { BASIC_FIELDS } from './fragments';


export const GET_REPOSITORIES = gql`
${BASIC_FIELDS}
query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String, $first: Int) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword,  after: $after, first: $first) {
    edges {
      node {
        ...BasicFields
      }
    }
      pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
`;

export const GET_ME = gql`
query Me($includeReviews: Boolean = false) {
  me {
    id
    username
    reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            repository {
            fullName
            }
            rating
            text
            createdAt
            repositoryId
            userId
          }
        }
      }
  }
}
`

export const GET_REPOSITORY = gql`
${BASIC_FIELDS}
query Node($id: ID!, $first: Int, $after: String){
  repository(id: $id) {
   ...BasicFields
    url
    reviews(first: $first, after: $after) {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
     pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      }
  }
}
`