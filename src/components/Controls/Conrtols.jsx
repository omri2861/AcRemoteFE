import React from "react";
import  {Grid, Button} from "@material-ui/core";
import GridSpace from "./GridSpace";

import ToysRoundedIcon from '@material-ui/icons/ToysRounded';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Controls(props) {
    return (
        <Grid container spacing="1">
            <Grid item xs={4}>
                <Button variant="contained">
                    <ToysRoundedIcon />
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained">MODE</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained">
                    <AddIcon />
                </Button>
            </Grid>
            <GridSpace cells={8} />
            <Grid item xs={4}>
                <Button variant="contained">
                    <RemoveIcon />
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="secondary">
                    <PowerSettingsNewIcon />
                </Button>
            </Grid>
        </Grid>
    );
}

export default Controls;
