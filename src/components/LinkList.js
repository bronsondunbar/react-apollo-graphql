import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from './Link'

import { FEED_QUERY } from '../constants'

class LinkList extends Component {
  // _updateCacheAfterVote = (store, createVote, linkId) => {
  //   const data = store.readQuery({ query: FEED_QUERY })

  //   const votedLink = data.feed.links.find(link => link.id === linkId)
  //   votedLink.votes = createVote.link.votes

  //   store.writeQuery({ query: FEED_QUERY, data })
  // }

  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const linksToRender = data.feed.links
    
          return (
            <div>
              {linksToRender.map((link, index) => {
                  return (
                    <Link
                      key={link.id}
                      link={link}
                      index={index}
                      updateStoreAfterVote={this._updateCacheAfterVote} />
                  )
                })
              }
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList