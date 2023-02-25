import {
  Button,
  createTheme,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f55353",
    },
  },
});

const Form = () => {
  return (
    <Stack style={{ width: "100%" }}>
      <ThemeProvider theme={theme}>
        <TextField
          placeholder="Voucher"
          label="Voucher"
          size="small"
          sx={{ width: "100%", color: "red" }}
        />
        <Button color="error" variant="outlined">
          Outlined
        </Button>
      </ThemeProvider>
    </Stack>
  );
};

export default Form;
