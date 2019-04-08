import { styled } from '@spherehq/geometry/Theme'

export const OrderedList = styled.ol`
  font-family: 'Titillium Web', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => props.theme.palette.text};
  margin: 24px 0;

  li {
    margin: 12px 0;
  }
`
