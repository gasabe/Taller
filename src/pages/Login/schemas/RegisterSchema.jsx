import * as yup from 'yup';

function isValidCuit(cuit) {
  cuit = (cuit || '').replace(/[^\d]/g, '');

  if (cuit.length !== 11 || isNaN(Number(cuit))) return false;

  const mult = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const digits = cuit.split('').map(Number);
  const checkDigit = digits[10];

  const total = mult.reduce((acc, val, idx) => acc + val * digits[idx], 0);
  let calculated = 11 - (total % 11);

  if (calculated === 11) calculated = 0;
  if (calculated === 10) calculated = 9;

  return checkDigit === calculated;
}


const RegisterSchema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  email: yup.string().email('Ingresa un email válido').required('El email es requerido'),
  password: yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('La contraseña es requerida'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Debes confirmar tu contraseña'),
  cuit: yup.string()
    .required('El CUIT es requerido')
    .test('is-valid-cuit', 'El CUIT no es válido', value => isValidCuit(value || '')),
});

export default RegisterSchema;