import { gql } from '@apollo/client';
import { BASIC_FIELDS } from './fragments';


export const GET_REPOSITORIES = gql`
${BASIC_FIELDS}
query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String ) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
    edges {
      node {
        ...BasicFields
      }
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
query Node($id: ID!){
  repository(id: $id) {
   ...BasicFields
    url
    reviews {
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
    }
  }
}
`