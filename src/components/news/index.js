import React from 'react'
import styled from 'styled-components'
import { Thumbnail } from '../news'
import { useAPI } from '../../stores'

const Wrapper = styled.div``

export const News = () => {
    const {
        api: { news },
    } = useAPI()

    const stories = news.map((article) => {
        ;<Thumbnail {...article} />
    })

    return <Wrapper>{stories}</Wrapper>
}
