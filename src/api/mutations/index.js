import gql from 'graphql-tag'

export const CREATE_LINK = gql`
  mutation CreateLink($description: String!, $url: String!) {
    createLink(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`

export const LINK_VOTE = gql`
  mutation LinkVote($linkId: ID!) {
    userVote(linkId: $linkId) {
      id
      link {
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`