import { styled } from '@spherehq/geometry/Theme'

export const UnorderedList = styled.ul`
  font-family: 'Titillium Web', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => props.theme.palette.text};
  margin: 24px 24px;
  list-style: inherit;

  li {
    margin: 12px 0;
  }
`
