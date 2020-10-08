import React from 'react'
import styled from 'styled-components/macro'
import { useNewsFeed } from '../../../hooks/api'
import {ArticleThumbnail} from './ArticleThumbnail'
import {BiNews as NewsIcon} from 'react-icons/bi'
import {Switch, Route} from 'react-router-dom' 
import {Article} from './Article'
import {Spinner} from '../../common'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.neutral[300]};
  width: 100%;
  overflow-y: auto;
`

const ThumbnailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 3px;
  align-content: stretch;
  justify-content: stretch;
`

export const News = ({ ...rest}) => {

  const {news, isLoading} = useNewsFeed()

  const thumbnails = isLoading ? null : news.map((article, idx) => {
    return <ArticleThumbnail idx={idx} key={idx} article={article}/>
  })

  

  return (
      <Wrapper label="News" icon={NewsIcon} {...rest}>
        <Switch>
          <Route path={`/news/:articleID`} component={Article}/>
          {isLoading ? <Spinner css={'margin: auto;'}/> : <ThumbnailsWrapper>
            {thumbnails}
          </ThumbnailsWrapper>}
        </Switch>
      </Wrapper>
  )
}