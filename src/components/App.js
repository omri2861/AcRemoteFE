import "./App.css";
import { Button, Grid, Box } from "@material-ui/core";

function App() {
    // TODO: Find a better way to align content to the middle
    return (
        <div className="App">
            <Box>
                <Grid container spacing="1">
                    <Grid item>
                        <Button variant="contained">PLUS</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined">MINUS</Button>
                    </Grid>
                    <Grid item md="2">
                        <Button variant="outlined">ON/OFF</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default App;
