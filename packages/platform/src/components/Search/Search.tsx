import * as React from 'react'
import { styled, css, theme } from '@spherehq/geometry/Theme'
import { spacing, typography } from '@spherehq/geometry/System'
import { IconNames } from '@blueprintjs/icons'

import { Icon } from '../Icon'

const BUTTON_SIZE = 32

const StyledForm = styled('form')`
  position: relative;
`

const sharedButtonStyles = css`
  ${({ theme }) => spacing({ theme, p: 3 })}
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: transparent;

  &:not(:disabled) {
    cursor: pointer;
  }
`

const StyledSearchButton = styled('button')`
  ${sharedButtonStyles}
  height: 24px;
  margin: 6px 6px 0 0;
  background-color: 'transparent';
  color: ${({ theme, disabled }) =>
    disabled ? 'inherit' : theme.colors.palette.white};
  right: 0;
`

const StyledClearButton = styled('button')<{ hidden: boolean }>`
  ${sharedButtonStyles}
  margin-top: 2px;
  color: inherit;
  right: ${BUTTON_SIZE}px;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`

const StyledInput = styled('input')<{ ref: React.RefObject<HTMLInputElement> }>`
  ${({ theme }) => typography({ theme, typography: 'nav2' })}
  ${({ theme }) =>
    spacing({
      theme,
      py: 4,
      pl: 6,
      pr: `${BUTTON_SIZE * 2}px`,
    })}
  display: block;
  min-height: ${BUTTON_SIZE}px;
  width: 100%;
  background-color: ${props => props.theme.colors.palette.purple.dark};
  color: ${({ theme }) => theme.colors.palette.white};
  border: 1px solid transparent;
  border-radius: 3px;

  &::-ms-clear {
    display: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.palette.purple.light};
  }

  &:focus {
    outline: 0;
  }
`

const StyledUnderline = styled('div')<{ isActive: boolean }>`
  transform: ${({ isActive }) => (isActive ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: 0;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  height: 2px;
  margin-top: -2px;
  background-color: ${({ theme }) => theme.colors.palette.blue.base};
  transition: opacity 0.2s ease-in-out 0s, transform 0.2s ease-in-out 0s;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`

/**
 * @component
 */
export const Search = () => {
  const [value, setValue] = React.useState('')
  const searchInput = React.createRef<HTMLInputElement>()

  const handleClearButtonClick = e => {
    e.preventDefault()
    setValue('')
    searchInput.current.focus()
  }

  const isInputEmpty = !value

  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="search"
        value={value}
        onChange={e => setValue(e.target.value)}
        ref={searchInput}
      />
      <StyledUnderline isActive={!isInputEmpty} />

      <StyledClearButton
        hidden={isInputEmpty}
        onClick={handleClearButtonClick}
        aria-label="Clear"
      >
        <Icon
          icon={IconNames.CROSS}
          iconSize={28}
          color={theme.colors.palette.purple.light}
        />
      </StyledClearButton>

      <StyledSearchButton disabled={isInputEmpty} aria-label="Search">
        <Icon
          icon={IconNames.SEARCH}
          iconSize={24}
          color={theme.colors.palette.purple.light}
        />
      </StyledSearchButton>
    </StyledForm>
  )
}
