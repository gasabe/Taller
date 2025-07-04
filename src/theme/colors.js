import { alpha } from '@mui/material/styles'

const withAlphas = (color) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  }
}

// Botones
export const primary = withAlphas({
  lightest: '#e4f5a6',
  light: '#d1e751',
  main: '#d1e751',
  dark: '#b6cc49',
  darkest: '#9aad42',
  contrastText: '#000000',
})

// Fondo
export const neutral = {
  50: '#ffffff',
  100: '#ffffff',
  200: '#ffffff',
  300: '#ffffff',
  400: '#ffffff',
  500: '#ffffff',
  600: '#f5f5f5',
  700: '#eaeaea',
  800: '#e0e0e0',
  900: '#d6d6d6',
}

// Texto (Fuente)
export const grey = withAlphas({
  lightest: '#333333',
  light: '#1a1a1a',
  main: '#000000',
  dark: '#000000',
  darkest: '#000000',
  contrastText: '#ffffff',
})

// Subtítulos
export const info = withAlphas({
  lightest: '#b3e5fc',
  light: '#81d4fa',
  main: '#4dbce9',
  dark: '#039be5',
  darkest: '#0277bd',
  contrastText: '#000000',
})

// Navbar / Detalles
export const success = withAlphas({
  lightest: '#a3d5f3',
  light: '#74c3ef',
  main: '#26ade4',
  dark: '#1b87b8',
  darkest: '#156c94',
  contrastText: '#ffffff',
})

// Advertencias
export const warning = withAlphas({
  lightest: '#FFF7E1',
  light: '#FFEDB5',
  main: '#F79009',
  dark: '#B54708',
  darkest: '#7A2E0E',
  contrastText: '#000000',
})

// Errores
export const error = withAlphas({
  lightest: '#FEE4E2',
  light: '#FAB7B2',
  main: '#F04438',
  dark: '#B42318',
  darkest: '#7A271A',
  contrastText: '#FFFFFF',
})
