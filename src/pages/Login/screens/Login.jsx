import { useState } from 'react';
import { Box, TextField, Button, InputLabel, InputAdornment, IconButton, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../screens/Login.css';
import logo from '../../../assets/tallerLogoMain.png';



function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem("remember", mail);
    } else {
      localStorage.removeItem("remember");
    }
    // lógicamente después harías tu doLogin
    navigate("/home-taller");
  };

  return (
    <>
      <div className="layout-content layout-content--login gradient-bg">
        <div className="gradient-animation"></div>
        <Box className="logo-container">
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
          />
        </Box>

        <Box
          className="login-form"
          component="form"
          onSubmit={handleSubmit}
        >
          <InputLabel className="input-label input-label--login" htmlFor="mail">
            Email
          </InputLabel>
          <TextField
            className="text-field"
            fullWidth
            id="mail"
            name="mail"
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <InputLabel
            className="input-label input-label--login"
            htmlFor="password"
          >
            Contraseña
          </InputLabel>
          <TextField
            className="text-field"
            fullWidth
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                color="primary"
              />
            }
            label="Recordar"
            sx={{ mt: 1 }}
          />

          <Button
            className="button-gradient"
            type="submit"
            variant="contained"
            fullWidth
          >
            Ingresar
          </Button>

          <Button
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => navigate('/register')}
          >
            <Typography component="span">
              ¿No tenes cuenta?{' '}
              <Typography
                component="span"
                sx={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  marginLeft: '4px',
                  '&:hover': { color: 'primary.light' }
                }}
              >
                Registrarse
              </Typography>
            </Typography>
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Login;
