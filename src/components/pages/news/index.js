import React from 'react'
import styled from 'styled-components/macro'
import { useNewsFeed } from '../../../hooks/api'
import {ArticleThumbnail} from './ArticleThumbnail'
import {BiNews as NewsIcon} from 'react-icons/bi'
import {Switch, Route} from 'react-router-dom' 
import {Article} from './Article'
import {Card} from '../../common'

const Wrapper = styled(Card)`
  background: ${props => props.theme.colors.neutral[300]};
  overflow-x: none;
  /* overflow-y: auto; */
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  max-height: 100%;
  width: 100%;
  overflow-y: auto;
`

const ThumbnailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 3px;
  align-content: stretch;
  /* justify-content: stretch; */
  width: 100%;
`

export const News = ({ ...rest}) => {

  const {news, isLoading} = useNewsFeed()

  const thumbnails = isLoading ? null : news.map((article, idx) => {
    return <ArticleThumbnail idx={idx} key={idx} article={article}/>
  })

  return (
      <Wrapper label="News" loading={isLoading} icon={NewsIcon} {...rest}>
        <ContentWrapper>
          <Switch>
            <Route path={`/news/:articleID`} component={Article}/>
            <Route path="/news">
              <ThumbnailsWrapper>
                {thumbnails}
              </ThumbnailsWrapper>
            </Route>
          </Switch>
        </ContentWrapper>
      </Wrapper>
  )
}