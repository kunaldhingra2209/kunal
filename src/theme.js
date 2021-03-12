import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/green';
import black from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
  palette: {
    type:"dark",
    primary: {
      main: purple[500],
    },
    secondary: {
      main: black[500],
    },
  },
});

export default theme; 