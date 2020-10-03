import React from 'react'
import styled, {css} from 'styled-components/macro'
// import {Link} from '../../common'
import {MdPerson as AuthorIcon, MdAccessTime as DateIcon} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {transparentize} from 'polished'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: ${props => props.theme.typeScale.h4};
  font-weight: bold;
  margin-bottom: 1em;
  line-height: 1.3;
`

const Author = styled.p`
  font-size: ${props => props.theme.typeScale.bodySmall};
`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  
  background: ${props => props.background ? css`url(${props.background})` : '#fff'};
  background-size: cover;
`

const Url = styled(Link)`
  font-size: ${props => props.theme.typeScale.bodySmall};
`

const Date = styled.p`
  font-size: ${props => props.theme.typeScale.bodySmall};
`

const Text = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.colors.neutral[200]};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Description = styled.p`
  margin-bottom: 1em;
  height: 4rem;
  overflow: hidden;
  line-height: 1.5;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
`

const SubText = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ReadArticle = styled.div`
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom: 0;
  width:100%;
  height:100%;
  background: ${props => {
    return transparentize(0.2, props.theme.colors.neutral[100])
  }};
  opacity: 0;
  display: grid;
  place-items: center;
  :hover {
    opacity: 1;
  }
  :active {
    background: ${props => {
      return transparentize(0.1, props.theme.colors.neutral[100])
    }};
  }
`

const ThumbnailWrapper = styled.div`
  position: relative;
  height: 12rem;
`

export const ArticleThumbnail = ({idx, article, ...rest}) => {
  
  return (
        <Wrapper { ...rest}>
          
          <Link to={`/news/${idx}`}>
            <ThumbnailWrapper>
              <ReadArticle>Read Article</ReadArticle>
              <Thumbnail background={article.thumbnail}/>
            </ThumbnailWrapper>
          </Link>
          <Text>
            <Title>{article.title}</Title>
            <Description>{article.text.substr(0, 100) + '...'}</Description>
            <SubText>
              <AuthorIcon size="1rem"/>
              <Author>{article.author}</Author>
              /
              <DateIcon size="1rem"/>
              <Date>{article.date}</Date>
            </SubText>
          </Text>
        </Wrapper>
    )
}