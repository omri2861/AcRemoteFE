import "./App.css";
import { Button, Grid, Box} from "@material-ui/core";
import ToysRoundedIcon from '@material-ui/icons/ToysRounded';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

/* This componenet creates space for the button grid 
 * props.cells - The amount of cells to space
 */
function GridSpace(props) {

    return <Grid item xs={props.cells}><Box /></Grid>
}

function App() {
    // TODO: Find a better way to align content to the middle
    return (
        <div className="App">
            <Box>
                <Grid container spacing="1">
                    <Grid item xs={4}>
                        <Button variant="contained"><ToysRoundedIcon /></Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained">MODE</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained"><AddIcon /></Button>
                    </Grid>
                    <GridSpace cells={8} />
                    <Grid item xs={4}>
                        <Button variant="contained"><RemoveIcon /></Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary"><PowerSettingsNewIcon /></Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default App;
