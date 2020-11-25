import React from "react";
import { Grid, Button, ButtonGroup, Box, makeStyles } from "@material-ui/core";
import GridSpace from "./GridSpace";

import ToysRoundedIcon from "@material-ui/icons/ToysRounded";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    }
}))

function Controls(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container spacing="1" justify="space-evenly" alignItems="flex-start">
                <Grid item>
                    <Button variant="contained">
                        <ToysRoundedIcon />
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">MODE</Button>
                </Grid>
                <Grid item>
                    <ButtonGroup orientation="vertical">
                        <Button variant="contained">
                            <AddIcon />
                        </Button>
                        <Button variant="contained">
                            <RemoveIcon />
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
            <Grid container>
            <Grid item>
                <Button variant="contained" color="secondary">
                    <PowerSettingsNewIcon />
                </Button>
            </Grid>
            </Grid>
        </Box>
    );
}

export default Controls;
