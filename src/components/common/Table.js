import React from 'react'
import styled, {css} from 'styled-components/macro'

const StyledTable = styled.table`
  display: grid;
  border-collapse: collapse;
  grid-template-columns: repeat(${(props) => props.colNum}, 1fr);
  grid-template-rows: auto;
  text-align: left;
  overflow-y: auto;

  thead,
  tbody,
  tr {
    display: contents; /* Content is ignored by parent grid. */
    width: 100%;
    overflow-y: auto;
  }
  tbody {
    padding: 0 1rem;
  }

  th,
  td {
    padding: 1rem 1rem;
    /* ${props => props.theme.isMobile && css`
      padding: 1rem 1rem;
    `} */
    overflow: hidden;
    white-space: nowrap;
    background: ${(props) => props.theme.colors.neutral[100]};

    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > * {
      flex-grow: 1;
    }
    min-height: min-content;
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[100]};
  }

  th {
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[600]};
    background: ${(props) => props.theme.colors.neutral[400]};
    font-weight: 600;
    color: ${props => props.theme.colors.neutral[1200]} !important;
    > * {
      margin-top: 0.2rem;
    }
  }

  td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  tr:nth-child(even) td {
    background: ${(props) => props.theme.colors.neutral[400]};
    
  }
  tr:nth-child(odd) td {
    background: ${(props) => props.theme.colors.neutral[200]};
  }
`

export const Table = ({ headerData, rowData, ...rest }) => {

  const headerMarkup = (
    headerData.map((item, idx) => <th key={idx}>{item}</th>)
  )

  const rowMarkup = React.useMemo(() => rowData.map((row, idx) => (
    <tr key={idx}>
      {row.map((item, idx) => (
        <td key={idx}>{item}</td>
      ))}
    </tr>
  )), [rowData])

  return (
    <StyledTable colNum={headerData.length} {...rest}>
      <thead><tr>{headerMarkup}</tr></thead>
      <tbody>{rowMarkup}</tbody>
    </StyledTable>
  )
}
