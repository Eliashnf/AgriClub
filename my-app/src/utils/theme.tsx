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
      light:"#627f91",
    },
    secondary: {
      main: "#3A4149",
    },
    error: {
      main: red.A400,
    },
    text:{
      primary: "#ddeaf2",
      secondary: "#929ea6",
    },
    background: {
      default: "#000000",
    }
  },
});

export default theme;
