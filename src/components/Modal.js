import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import classes from "../UI/Header/Header.module.css";

const Modal = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.modal}>
      <div className={classes.logoSection}>
        <p>Welcome back</p>
        <Link to="/" className={`logo ${classes.logoform}`}>
          HuntStore
        </Link>
      </div>

      <form action="">
        <InputLabel></InputLabel>
        <TextField
          placeholder="Email Address"
          type="email"
          variant="outlined"
          size="md"
          fullWidth
        />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
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
            label="Password"
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
      <div className={classes.or}>
        <hr />
        <p>or</p>
        <hr />
      </div>
      <Box>
        <Button
          color="primary"
          disableElevation
          variant="contained"
          sx={{ fontWeight: "bolder", fontSize: "1rem" }}
        >
          <CiFacebook color="blue" />
          Continue With Facebook
        </Button>
        <Button
          color="primary"
          disableElevation
          variant="contained"
          sx={{ fontWeight: "bolder", fontSize: "1rem" }}
        >
          {" "}
          <FcGoogle />
          Continue With Google
        </Button>
      </Box>
      <div>
        <h2>
          Don't have account? <Link to="/authentication">Sign Up</Link>
        </h2>
      </div>
    </div>
  );
};

export default Modal;
