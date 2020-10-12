import React from 'react'
import styled, {css} from 'styled-components/macro'
import {MdPerson as AuthorIcon, MdAccessTime as DateIcon, MdArrowBack as Arrow} from 'react-icons/md'
import {Link} from '../../common'
import {useParams} from 'react-router-dom'
import {useNewsFeed} from '../../../hooks/api'

const Wrapper = styled.div`
  padding: 5rem;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  ${props => props.theme.isMobile && css`
    padding: 2rem;
  `}
  background: ${props => props.theme.colors.neutral[100]};
  /* scroll-padding: 2em; */
`

const Title = styled.h1`
  font-size: ${props => props.theme.typeScale.h2};
  font-weight: bold;
  margin-bottom: 0.5em;
  line-height: 1.2;
  max-width: 40rem;
  ${props => props.theme.isMobile && css`font-size: ${props => props.theme.typeScale.h3};`}
`

const Author = styled.p`
 
`

const Date = styled.p`

`

// const Text = styled.div`
//   padding: 1.5rem;
//   background: ${props => props.theme.colors.neutral[200]};
// `

const Description = styled.p`
  margin-bottom: 1em;
  height: 4rem;
  overflow: hidden;
  line-height: 1.5;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
`

const Subtitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
  font-size: ${props => props.theme.typeScale.bodySmall};
`

const BackArrow = styled(Arrow)`
`

const ArticleArrow = styled(BackArrow)`
  transform: rotate(135deg);
  width: 1.25rem;
  height: 1.25rem;
  
  /* display: inline; */
`

const BackWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap:1rem;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
  font-size: ${props => props.theme.typeScale.body};
  :hover {
    color: ${props => props.theme.colors.neutral[800]}
  }
  :active{
    color: ${props => props.theme.colors.neutral[300]}
  }
`

const Text = styled.div`
  column-count: 2;
  column-gap: 4rem;
  line-height: 1.7;
  max-width: 65rem;
  @media(max-width: 48rem) {
    column-count: 1;
  }
  margin-bottom: 3rem;
`

const Attribution = styled.p`
  color: ${props => props.theme.colors.neutral[800]};
  white-space: nowrap;
  display: flex;
  flex-wrap: wrap;
  font-size: ${props => props.theme.typeScale.bodySmall};
  margin-bottom: 4rem;
`

export const Article = ({...rest}) => {
    
  const {articleID} = useParams() 
  const {news, isLoading} = useNewsFeed()
  if (isLoading) return null
  const article = news[articleID];

  return (
        <Wrapper { ...rest}>
          <BackWrapper to='/news'>
            <BackArrow size="1.5rem"/>
            <p css={`margin-top: 0.2em;`}>Back to Articles</p>
          </BackWrapper>
          
          <Title>{article.title}</Title>
          <Subtitle>
            <AuthorIcon css="margin-right: -0.25rem;" size="0.9rem"/>
            <Author>{article.author}</Author>
            <DateIcon css="margin-left: 0.5rem; margin-right: -0.25rem;"
            size="0.9rem"/>
            <Date>{article.date}</Date>
            
          </Subtitle>
          <Text>
            {article.text}
          </Text>
          <Attribution>
            <p css={`margin-top: 0.15rem; margin-right: 0.5rem;`}>Article provided by CoinTelegraph</p> 
            <Link external to={article.url}> 
              <ArticleArrow/>
              (Full Article)
            </Link>
          </Attribution>
        </Wrapper>
    )
}
