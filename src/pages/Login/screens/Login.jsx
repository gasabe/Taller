import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // logica para iniciar sesión
    navigate("/home-comercio");
  };

  return (
    <Box sx={{ textAlign: "center", padding: 3 }}>
      <Typography variant="h1">LOGIN</Typography>
      <Button variant="contained" onClick={handleLogin} sx={{ marginTop: 2 }}>
        Iniciar Sesión
      </Button>
    </Box>
  );
}

export default Login;
