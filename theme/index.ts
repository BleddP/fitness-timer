import light from './light'
import dark from './dark'

const preferDark = true

let theme = light
if (preferDark) theme = dark

export default theme