import * as Yup from 'yup'

const LoginSchema = () => {

  return Yup.object({
    mail: Yup.string()
      .email('El email no es valido')
      .max(255)
      .required('El email es requerido'),
    password: Yup.string().max(255).required('La contraseña es requerida'),
  })
}

export default LoginSchema