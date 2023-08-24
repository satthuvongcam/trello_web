import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: red[300]
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    text: {
      secondary: red[500]
    }
  }
})

export default theme;