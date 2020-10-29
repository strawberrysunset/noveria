import React from 'react'
import styled from 'styled-components/macro'
import {Link} from '../../common'
import {FaTwitter, FaReddit, FaFacebook, FaMailBulk} from 'react-icons/fa'
import {ListItem} from './ListItem'

const shareItems = [
  {
    name: 'Twitter',
    url: "https://twitter.com/intent/tweet?url=noveria.app&text=Check%20out%20Noveria,%20the%20browser%20based%20crypto%20portfolio%20tracker!&via=aidankeay",
    icon: <FaTwitter size="1.125rem"/>
  },
  {
    name: 'Reddit',
    url: "https://reddit.com/submit?url=noveria.app&title=Check%20out%20Noveria,%20the%20browser%20based%20crypto%20portfolio%20tracker!",
    icon: <FaReddit size="1.125rem"/>
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/sharer.php?u=noveria.app',
    icon: <FaFacebook size="1.125rem"/>
  }
]

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 0.75rem;
  max-width: min-content;
`

export const useShareList = () => {
    const Icon = ({icon, name}) => (
      <Wrapper>
        {icon}
        <p css={`margin-top: 0.15rem;`}>{name}</p>
      </Wrapper>
    )
    return shareItems.map(({url, icon, name}, idx) => {
      return (
        <Link key={idx} external to={url}>
          <ListItem left={<Icon icon={icon} name={name}/>}/>
        </Link>
      )
    })
}