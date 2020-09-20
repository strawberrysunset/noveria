import { PopUp } from '../../../components/common'

export function createPopUp(handleClose, content) {
  return () => (
    <PopUp handleClose={handleClose} showing={showing}>
      {content}
    </PopUp>
  )
}
