import gql from 'graphql-tag'

export const ALL_LINKS = gql`
  query AllLinks($first: Int, $skip: Int, $orderBy: LinkOrderByInput) {
    allLinks(first: $first, skip: $skip, orderBy: $orderBy) {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
      count
    }
  }
`