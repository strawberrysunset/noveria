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
    padding: 2.5rem 1.5rem;
  `}
  background: ${props => props.theme.colors.neutral[100]};
  /* scroll-padding: 2em; */
`

const Title = styled.h1`
  font-size: ${props => props.theme.typeScale.h2};
  font-weight: bold;
  margin-bottom: 0.75em;
  line-height: 1.2;
  max-width: 40rem;
  ${props => props.theme.isMobile && css`
    font-size: ${props => props.theme.typeScale.h3};
  `}
`

const Author = styled.p`
 
`

const Date = styled.p`

`

const Description = styled.p`
  margin-bottom: 1em;
  height: 4rem;
  overflow: hidden;
  line-height: 1.5;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
`

const Subtitle = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  white-space: nowrap;
  max-width: min-content;
  grid-gap: 0.5rem;
  margin-bottom: 3rem;
  font-size: ${props => props.theme.typeScale.bodySmall};
  color: ${props => props.theme.colors.neutral[1400]};
`

const BackArrow = styled(Arrow)`
`

const ArticleArrow = styled(BackArrow)`
  transform: rotate(135deg);
  width: 1.25rem;
  height: 1.25rem;
`

const BackWrapper = styled(Link)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  max-width: min-content;
  white-space: nowrap;
  grid-gap:1rem;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.neutral[1200]};
  font-size: ${props => props.theme.typeScale.body};
  :hover {
    color: ${props => props.theme.colors.neutral[800]}
  }
  :active{
    color: ${props => props.theme.colors.neutral[300]}
  }
  ${props => props.theme.isMobile && css`
    margin-bottom: 1.5rem;
  `}
`

const Text = styled.div`
  column-count: 2;
  column-gap: 4rem;
  line-height: 1.7;
  max-width: 65rem;
  overflow-wrap: break-word;
  @media(max-width: 48rem) {
    column-count: 1;
  }
  margin-bottom: 3rem;
  ${props => props.theme.isMobile && css`
    margin-bottom: 1.5rem;
  `}
`

const Attribution = styled.p`
  color: ${props => props.theme.colors.neutral[1200]};
  white-space: nowrap;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  align-items: center;
  width: min-content;
  font-size: ${props => props.theme.typeScale.bodySmall};
  margin-bottom: 4rem;
  ${props => props.theme.isMobile && css`
    margin-bottom: 2rem;
  `}
`

export const Article = ({...rest}) => {
    
  const {articleID} = useParams() 
  const {data: news, isLoading} = useNewsFeed()
  const article = news[articleID];
  if (isLoading || !article) return null

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
            <p>Article provided by CoinTelegraph</p> 
            <Link external to={article.url}> 
              <ArticleArrow/>
              (Full Article)
            </Link>
          </Attribution>
        </Wrapper>
    )
}
