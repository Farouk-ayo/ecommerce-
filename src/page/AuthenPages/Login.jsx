import {
  Button,
  createTheme,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";

import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import classes from "./AuthenPages.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d23f57;",
    },
    secondary: {
      main: "#3b5998",
    },
    success: {
      main: "#4285f4;",
    },
  },
  typography: {
    fontFamily: [""],
    button: {
      textTransform: "none",
    },
  },
});

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <section className={classes.container}>
        <div className={classes.signup}>
          <div className="logoSection">
            <p className="formTitle">Welcome back</p>
            <Link to="/" className="logo logoform">
              HuntStore
            </Link>
          </div>
          <form action="">
            <FormControl
              sx={{ display: "flex", flexDirection: "column", gap: ".3rem" }}
            >
              <label htmlFor="email">Email Address</label>
              <TextField
                id="email"
                placeholder="Email Address"
                type="email"
                variant="outlined"
                size="small"
                fullWidth
              />
            </FormControl>

            <FormControl
              variant="outlined"
              sx={{ display: "flex", flexDirection: "column", gap: ".3rem" }}
            >
              <label htmlFor="outlined-adornment-password">Password</label>
              <OutlinedInput
                size="small"
                id="outlined-adornment-password"
                placeholder="**********"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              color="primary"
              disableElevation
              variant="contained"
              sx={{ fontWeight: "bolder", fontSize: "1rem" }}
            >
              Login
            </Button>
          </form>
          <div className="or">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <Stack spacing={1} direction="column">
            <Button
              disableElevation
              variant="contained"
              sx={{
                fontWeight: "bolder",
                fontSize: "1rem",
                display: "flex",
                gap: ".3rem",
              }}
              color={"secondary"}
            >
              <SiFacebook color="white" size={22} />
              Continue With Facebook
            </Button>
            <Button
              color="success"
              disableElevation
              variant="contained"
              sx={{
                fontWeight: "bolder",
                fontSize: "1rem",
                display: "flex",
                gap: ".3rem",
              }}
            >
              <FcGoogle className="googleIcon" size={22} />
              Continue With Google
            </Button>
          </Stack>
          <div className="accountReset">
            <h2>Don't have account?</h2>
            <Link to="/sign-up" onClick={props.onClose}>
              Sign Up
            </Link>
          </div>
          <div className="accountReset reset">
            <h2>Forgot your password?</h2>
            <Link to="/reset-password" onClick={props.onClose}>
              Reset It
            </Link>
          </div>{" "}
        </div>
      </section>
    </ThemeProvider>
  );
};

export default Login;
