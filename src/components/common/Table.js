import React from 'react'
import styled from 'styled-components/macro'

const TableWrapper = styled.table`
  display: grid;
  border-collapse: collapse;
  grid-template-columns: repeat(${(props) => props.colNum}, 1fr);
  grid-template-rows: auto;
  text-align: left;

  thead {
    position: static;
  }

  thead,
  tbody,
  tr {
    display: contents; /* Means they are invisible to parent grid. */
    width: 100%;
  }

  tbody {
    overflow-y: auto;
  }

  th,
  td {
    padding: 1rem 1rem;
    overflow: hidden;
    white-space: nowrap;
    /* text-overflow: ellipsis; */
    background: ${(props) => props.theme.colors.neutral[100]};

    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > * {
      flex-grow: 1;
    }
  }

  th:first-child,
  td:first-child {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  th {
    position: sticky;
    /* z-index: 2; */
    top: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[300]};
    background: ${(props) => props.theme.colors.neutral[100]};
    font-weight: 500;
    /* box-shadow: 1rem 1rem 3rem ${(props) => props.theme.colors.neutral[100]}; */
  }
  td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }
  tr:nth-child(even) td {
    background: rgba(255, 255, 255, 0.04);
  }
`

export const Table = ({ headerData, rowData, ...rest }) => {
  return (
    <TableWrapper colNum={headerData.length} {...rest}>
      <thead>
        <tr>
          {headerData.map((item, idx) => (
            <th key={idx}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, idx) => (
          <tr key={idx}>
            {row.map((item, idx) => (
              <td key={idx}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  )
  
}
