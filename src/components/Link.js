import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'

import { ALL_LINKS } from '../api/queries'
import { LINK_VOTE } from '../api/mutations'

class Link extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    const { index, link } = this.props

    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{index + 1}.</span>
          {authToken && (
            <Mutation
              mutation={LINK_VOTE}
              variables={{ linkId: link.id }}
              refetchQueries={[{ query: ALL_LINKS }]}
              awaitRefetchQueries={true} >
              {userVote => (
                <div className="ml1 gray f11" onClick={userVote}>
                  ▲
                </div>
              )}
            </Mutation>
          )}
        </div>
        <div className="ml1">
          <div>
            {link.description} ({link.url})
          </div>
          <div className="f6 lh-copy gray">
            {link.votes.length} votes | by{' '}
            {link.postedBy
              ? link.postedBy.name
              : 'Unknown'}{' '}
            {timeDifferenceForDate(link.createdAt)}
          </div>
        </div>
      </div>
    )
  }
}

export default Link