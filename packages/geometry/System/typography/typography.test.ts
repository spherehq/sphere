import { typography } from './typography'

const breakpointMap = {
  sm: 400,
  md: 640,
}

const theme = {
  baseFontSize: 16,
  typography: {
    display2: {
      fontSize: '1.5rem',
    },
    display1: {
      fontSize: '1.25rem',
    },
    h1: { type: 'map', sm: 'display1', md: 'display2' },
  },
  breakpoints: {
    map: breakpointMap,
    keys: ['sm', 'md'],
    up: (key: string) => `@media (min-width: ${breakpointMap[key] / 16}em)`,
  },
}

describe('typography', () => {
  it('returns a style object with a given property', () => {
    const result = typography({
      theme,
      typography: 'display2',
    })

    expect(result).toEqual({ fontSize: '1.5rem' })
  })

  it('allow "map" type which is a responsive map to other top-level properties', () => {
    const result = typography({
      theme,
      typography: 'h1',
    })

    expect(result).toEqual({
      '@media (min-width: 25em)': { fontSize: '1.25rem' },
      '@media (min-width: 40em)': { fontSize: '1.5rem' },
    })
  })
})
