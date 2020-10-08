import { PopUp } from '../../components/misc'
import React from 'react'

export const createPopUp = ({handleClose, content}) => {
  return <PopUp content={content} handleClose={handleClose}/>
}
