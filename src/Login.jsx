
import { useContext, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const LoginPage = () => {

  const { user,login } = useContext(AuthContext)

  console.log(user,login, "user from context")

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState([])
    const handlLogin = async() => {
        const response  = await fetch("https://api.themoviedb.org/3/account/account_id", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                accept: 'application/json'
            },
        })
        console.log(response, "response")
        console.log(response.ok, "response.ok")
        const result = await response.json();
        setUserData(result)
        login(result)
        if(response.ok){
          navigate("/home")
      }
        console.log(result, "result")
    }
 
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Login
          </Typography>
          {username}
          <Box>
            {/* {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )} */}
            <input 
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={(e)=> setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e)=>setPassword(e.target.value)}
              margin="normal"
              required
            //   disabled={loading}
            />
            <TextField
              label="Token"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              onChange={(e)=> setToken(e.target.value)}
            //   disabled={loading}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handlLogin}
            //   disabled={loading}
            >
                Login
              {/* {loading ? <CircularProgress size={24} /> : "Login"} */}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
