import "./App.css";
import { Button, Grid, Box, IconButton } from "@material-ui/core";
import ToysRoundedIcon from '@material-ui/icons/ToysRounded';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function App() {
    // TODO: Find a better way to align content to the middle
    return (
        <div className="App">
            <Box>
                <Grid container spacing="1">
                    <Grid item>
                        <Button variant="contained"><ToysRoundedIcon /></Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">MODE</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained"><AddIcon /></Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained"><RemoveIcon /></Button>
                    </Grid>
                    <Grid item md="2">
                        <Button variant="contained" color="secondary"><PowerSettingsNewIcon /></Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default App;
