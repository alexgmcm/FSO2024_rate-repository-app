import { gql } from '@apollo/client';

export const BASIC_FIELDS = gql`
  fragment BasicFields on Repository {
    fullName
    description
    id
    language
    ownerAvatarUrl
  }
`;