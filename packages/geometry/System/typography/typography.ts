import {
  compose,
  style,
  typography as cssProperties,
} from '@material-ui/system'

const prop = 'typography'
const themeKey = 'typography'

const variants = style({
  prop,
  themeKey,
  cssProperty: false,
})

const typographyFn = compose(
  cssProperties,
  variants,
)

export const typography = props => {
  if (props[prop] === undefined) return null

  const propValue = props.theme[themeKey][props[prop]]
  if (propValue && propValue.type === 'map') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, ...rest } = propValue
    return typographyFn({ ...props, [prop]: rest })
  }
  return typographyFn(props)
}
