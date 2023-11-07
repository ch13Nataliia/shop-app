import { createTheme } from "@mui/material/styles";
import {orange, grey} from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: "#78909c",
      contrastText: grey[900]
    },
    secondary: {
      main: "#edf2ff",
      contrastText: grey[900],
    },
  },
});

export default theme;