import { alpha } from '@mui/material/styles'

const withAlphas = (color) => ({
  ...color,
  alpha4: alpha(color.main, 0.04),
  alpha8: alpha(color.main, 0.08),
  alpha12: alpha(color.main, 0.12),
  alpha30: alpha(color.main, 0.3),
  alpha50: alpha(color.main, 0.5),
})

// Botones principales (amarillo industrial)
export const primary = withAlphas({
  lightest: '#fff9db',
  light: '#fff176',
  main: '#fdd835',
  dark: '#c6a700',
  darkest: '#8f7a00',
  contrastText: '#000000',
})

// Fondo neutro (metálicos claros)
export const neutral = {
  50: '#f9f9f9',
  100: '#f3f3f3',
  200: '#ededed',
  300: '#e0e0e0',
  400: '#cfcfcf',
  500: '#bdbdbd',
  600: '#9e9e9e',
  700: '#757575',
  800: '#616161',
  900: '#424242',
}

// Texto (gris casi negro)
export const grey = withAlphas({
  lightest: '#4f4f4f',
  light: '#333333',
  main: '#212121',
  dark: '#111111',
  darkest: '#000000',
  contrastText: '#ffffff',
})

// Subtítulos o info (azul mecánico)
export const info = withAlphas({
  lightest: '#e0f7fa',
  light: '#80deea',
  main: '#26c6da',
  dark: '#0097a7',
  darkest: '#006064',
  contrastText: '#000000',
})

// Navbar / detalles (gris acero)
export const success = withAlphas({
  lightest: '#eceff1',
  light: '#b0bec5',
  main: '#78909c',
  dark: '#546e7a',
  darkest: '#37474f',
  contrastText: '#ffffff',
})

// Advertencias (naranja óxido)
export const warning = withAlphas({
  lightest: '#fff3e0',
  light: '#ffb74d',
  main: '#fb8c00',
  dark: '#e65100',
  darkest: '#bf360c',
  contrastText: '#000000',
})

// Errores (rojo intenso)
export const error = withAlphas({
  lightest: '#ffebee',
  light: '#ef9a9a',
  main: '#e53935',
  dark: '#b71c1c',
  darkest: '#7f0000',
  contrastText: '#ffffff',
})
