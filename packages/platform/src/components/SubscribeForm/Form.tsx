import { styled } from '@spherehq/geometry/Theme'
import { Flex } from '@spherehq/geometry/Components/Flex'

export const FormWrapper = styled(Flex)`
  box-shadow: inset 0 1px 4px 0 ${props => props.theme.colors.palette.black};
  margin-top: 27px;
  margin-bottom: 12px;
  flex-direction: row;
`

export const InputField = styled.input`
  width: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #d8d8dc;
  box-sizing: border-box;

  padding: 11px 21px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: normal;
  color: #666666;

  &:active,
  &:focus {
    border: 1px solid ${props => props.theme.colors.palette.blue.base};
  }

  &:focus {
    outline-offset: 0;
    outline: none;
  }
`

export const PrimaryButton = styled.button`
  background-color: ${props => props.theme.palette.cta};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  width: 168px;
  height: 48px;
  border: none;
  box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.25);

  font-family: 'Titillium Web', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 16px;
  letter-spacing: normal;
  color: #fefeff;

  cursor: pointer;

  &:hover:enabled {
    background-color: ${props => props.theme.palette.focus};
  }

  &:active:enabled {
    background-color: ${props => props.theme.palette.active};
    box-shadow: inset 0 1px 4px 0 ${props => props.theme.colors.palette.black};
  }

  &:focus {
    outline-offset: 0;
    outline: none;
  }

  &:disabled {
    opacity: 0.3;
  }
`
