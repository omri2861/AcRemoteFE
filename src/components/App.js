import './App.css';
import Paper from '@material-ui/core/Paper';
import Controls from './Controls/Conrtols';
import Screen from './Screen';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FFA500',
    },
  },
});

function App() {
  // TODO: Find a better way to align content to the middle
  return (
    <div className="App">
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
