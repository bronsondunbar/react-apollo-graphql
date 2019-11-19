import React, { Component } from 'react'
import { Query } from 'react-apollo'

import { FEED_QUERY } from '../constants'

import Link from './Link'

class LinkList extends Component {
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