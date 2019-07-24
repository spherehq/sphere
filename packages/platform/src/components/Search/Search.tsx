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

const SearchButton = styled('button')<{ hidden: boolean }>`
  ${sharedButtonStyles}
  height: 24px;
  margin: 6px 6px 0 0;
  background-color: ${({ theme, disabled }) =>
    disabled ? 'transparent' : theme.colors.palette.purple.lightest};
  color: ${({ theme, disabled }) =>
    disabled ? 'inherit' : theme.colors.palette.white};
  right: 0;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`

const StyledClearButton = styled('button')<{ hidden: boolean }>`
  ${sharedButtonStyles}
  color: inherit;
  right: 0;
  height: 100%;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  overflow: hidden;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  svg {
    margin-top: 4px;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.palette.purple.darkest};
    outline-offset: 0;
    outline: none;

    svg {
      fill: ${({ theme }) => theme.colors.palette.white};
    }
  }
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
  background-color: ${props => props.theme.colors.palette.purple.lightest};
  color: ${({ theme }) => theme.colors.palette.purple.darkest};
  border: 1px solid transparent;
  border-radius: 3px;

  &::-ms-clear {
    display: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.palette.purple.base};
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
  background-color: ${({ theme }) => theme.colors.primary};
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

  const onClear = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue('')

    if (searchInput.current !== null) {
      searchInput.current.focus()
    }
  }

  const isInputEmpty = !value

  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="search for something great"
        value={value}
        onChange={e => setValue(e.target.value)}
        ref={searchInput}
      />
      <StyledUnderline isActive={!isInputEmpty} />

      <StyledClearButton
        hidden={isInputEmpty}
        onClick={onClear}
        aria-label="Clear"
      >
        <Icon
          icon={IconNames.CROSS}
          iconSize={28}
          color={theme.palette.primary}
        />
      </StyledClearButton>

      <SearchButton
        disabled={isInputEmpty}
        aria-label="Search"
        hidden={!isInputEmpty}
      >
        <Icon
          icon={IconNames.SEARCH}
          iconSize={24}
          color={theme.colors.palette.purple.base}
        />
      </SearchButton>
    </StyledForm>
  )
}
