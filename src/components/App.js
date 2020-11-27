import './App.css';
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

const classes = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    padding: theme.spacing(2),
  }
}));

function App() {
  // TODO: Find a better way to align content to the middle
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Paper elevation={10}>
          <Screen />
          <Controls />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
