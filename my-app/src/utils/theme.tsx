import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
        'Poppins'
    ].join(','),
  },
  palette: {
    primary: {
      main: "#ffffff",
      light:"#00000",
    },
    secondary: {
      main: "#3A4149",
    },
    error: {
      main: red.A400,
    },
    text:{
      primary: "#000000",
      secondary: "#000000",
    },
    background: {
      default: "#000000",
    }
  },
});

export default theme;
