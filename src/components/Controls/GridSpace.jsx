import React from "react";
import {Box, Grid} from "@material-ui/core";

/* This componenet creates space for the button grid 
 * props.cells - The amount of cells to space
 */
function GridSpace(props) {

    return <Grid item xs={props.cells}><Box /></Grid>
}

export default GridSpace;
