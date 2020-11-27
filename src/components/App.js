import Paper from '@material-ui/core/Paper';
import Controls from './Controls/Conrtols';
import Screen from './Screen';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FFA500',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
  controller: {
    // NOTE: This call raises a warning for some reason. Find out why and fix it
    padding: theme.spacing(2),
  }
}));

function App() {
  // TODO: Find a better way to align content to the middle
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Paper elevation={10} className={classes.controller}>
          <Screen />
          <Controls />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
