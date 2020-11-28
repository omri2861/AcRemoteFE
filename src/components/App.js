import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core';
import Controller from './Controller';

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
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
}));

function App() {
  // TODO: Find a better way to align content to the middle
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Controller />
      </ThemeProvider>
    </div>
  );
}

export default App;
