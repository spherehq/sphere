import { styled } from '@spherehq/geometry/Theme'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(51, 51, 51, 0.2485);
  margin: 32px 0;

  thead {
    background-color: ${props => props.theme.colors.palette.purple.darkest};
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.palette.white};
  }

  th {
    padding: 12px 24px;
  }

  td {
    padding: 12px 24px;
  }

  tbody {
    text-transform: uppercase;

    tr {
      background-color: ${props => props.theme.colors.palette.white};

      &:nth-child(even) {
        background-color: ${props =>
          props.theme.colors.palette.purple.lightest};
      }
    }
  }
`

export default Table
