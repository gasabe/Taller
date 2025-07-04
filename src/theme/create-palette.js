import { common } from '@mui/material/colors'
import { alpha } from '@mui/material/styles'
import { error, info, neutral, grey, success, warning, primary } from './colors'

export function createPalette() {
  return {
    action: {
      active: grey.main, // Texto principal (negro)
      disabled: alpha(grey.main, 0.38),
      disabledBackground: alpha(grey.main, 0.12),
      focus: alpha(grey.main, 0.16),
      hover: alpha(grey.main, 0.04),
      selected: alpha(grey.main, 0.12),
    },
    background: {
      default: neutral[50], // Fondo blanco
      paper: neutral[50],   // Fondo blanco
    },
    divider: '#E0E0E0', // Separadores en gris claro
    error,
    info,  // Subtítulos (azul claro)
    mode: 'light',
    neutral,
    primary,  // Botones (verde claro)
    secondary: success, // Navbar / detalles (azul oscuro)
    success,
    text: {
      primary: grey.main,  // Texto negro
      secondary: grey.light, // Texto gris claro
      disabled: alpha(grey.main, 0.38),
    },
    warning,
  }
}
