import {
  Box, TextField, Button, InputLabel, InputAdornment,
  IconButton, Typography, CircularProgress, Alert
} from '@mui/material';
import {
  Lock, Email, Person, Visibility, VisibilityOff, Description, Phone
} from '@mui/icons-material';

import '../screens/Login.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import RegisterSchema from '../schemas/RegisterSchema';
import logo from '/src/assets/tallerLogoMainmaschico.png';

import useRegisterCliente from '../../Login/hooks/useRegisterCliente.js';

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cedulaFile, setCedulaFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  const { registerCliente } = useRegisterCliente();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setCedulaFile(event.target.files[0]);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      adminName: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMsg(null);

      const { data, error } = await registerCliente({
        nombre: values.name,
        telefono: values.phoneNumber,
        direccion: values.adminName, // si querés cambiar, adaptalo
        email: values.email
      });

      setLoading(false);

      if (error) {
        console.error('Error en registro:', error.message);
        setErrorMsg(error.message);
      } else {
        console.log('Cliente registrado:', data);
        setSuccess(true);
      }
    },
  });

  return (
    <div className="layout-content layout-content--login gradient-bg">
      <div className="gradient-animation"></div>

      <Box className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </Box>

      {errorMsg && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMsg}
        </Alert>
      )}

      <Box className="login-form" component="form" onSubmit={formik.handleSubmit}>
        <InputLabel className="input-label input-label--login" htmlFor="name">
          Nombre completo
        </InputLabel>
        <TextField
          className="text-field"
          fullWidth
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />

        <InputLabel className="input-label input-label--login" htmlFor="email">
          Email
        </InputLabel>
        <TextField
          className="text-field"
          fullWidth
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />

        <InputLabel className="input-label input-label--login" htmlFor="phoneNumber">
          Teléfono
        </InputLabel>
        <TextField
          className="text-field"
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone />
              </InputAdornment>
            ),
          }}
        />

        <InputLabel className="input-label input-label--login" htmlFor="adminName">
          Titular del auto
        </InputLabel>
        <TextField
          className="text-field"
          fullWidth
          id="adminName"
          name="adminName"
          value={formik.values.adminName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.adminName && Boolean(formik.errors.adminName)}
          helperText={formik.touched.adminName && formik.errors.adminName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />

        <InputLabel className="input-label input-label--login" htmlFor="password">
          Contraseña
        </InputLabel>
        <TextField
          className="text-field"
          fullWidth
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <InputLabel className="input-label input-label--login" htmlFor="confirmPassword">
          Confirmar Contraseña
        </InputLabel>
        <TextField
          className="text-field"
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />

        <Button
          className="button-gradient"
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          sx={{ mt: 3, mb: 2 }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Registrarse'}
        </Button>

        <Button fullWidth sx={{ mt: 2 }}>
          <Typography component="span">
            ¿Ya tenes cuenta?
            <Typography
              component="span"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/');
              }}
              sx={{
                textDecoration: 'underline',
                cursor: 'pointer',
                marginLeft: '4px',
                '&:hover': { color: 'primary.light' }
              }}
            >
              Inicia sesión
            </Typography>
          </Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Register;
