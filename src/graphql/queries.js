import { gql } from '@apollo/client';
import { BASIC_FIELDS } from './fragments';


export const GET_REPOSITORIES = gql`
${BASIC_FIELDS}
query Node {
    repositories {
      edges {
        node {
        ...BasicFields
        }
      }
    }
  }
`;