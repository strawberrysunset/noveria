import React from 'react'
import styled from 'styled-components/macro'
import {useSettings} from '../../../context'
import {Link} from '../../common'
import {FaTwitter, FaInstagram, FaFacebook, FaMailBulk} from 'react-icons/fa'
import {useMenu} from '../../../context'

const shareItems = [
  {
    to: 'https://www.twitter.com',
    option: <div>yo</div>
  },
  {
    to: 'https://www.instragram.com',
    option: <div>yo</div>
  },
  {
    to: 'https://www.facebook.com',
    option: <div>yo</div>
  },
  {
    to: 'mailto%3Aperson%40domain.com%3Fsubject%3DCheck%20out%20Noveria%26body%3DYou%20should%20try%20out%20Noveria%2C%20an%20accountless%20cryptocurrency%20portfolio%20tracker.',
    option: <div>yo</div>
  }
]


export const ShareList = () => {
    return shareItems.map(item => {
      return {
        onClick: () => {},
        title: item.option,
      }
    })
}