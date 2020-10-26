export const Percentage = ({children}) => {
  const prefix = (children >= 0) ? '+' : '-'
  return prefix + children.toFixed(2) + '%'
}