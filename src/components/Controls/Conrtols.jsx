import React from 'react';
import {Grid, Box} from '@material-ui/core';

import AcButton from './AcButton';
import FanButton from './FanButton';
import TempratureControls from './TempratureConrtols';
import PowerButton from './PowerButton';

import modes from '../../acModes';

const lowestTemprature = 17;
const highestTemprature = 27;

function Controls(props) {
  function increaseTemprature() {
    props.setState((prevState) => {
      let newTemprature = prevState.temprature + 1;
      return {
        ...prevState,
        temprature: newTemprature < highestTemprature ? newTemprature : highestTemprature,
      };
    });
  }

  function decreaseTemprature() {
    props.setState((prevState) => {
      let newTemprature = prevState.temprature - 1;
      return {
        ...prevState,
        temprature: newTemprature > lowestTemprature ? newTemprature : lowestTemprature,
      };
    });
  }

  function changeMode() {
    props.setState((prevState) => {
      return {
        ...prevState,
        mode: (prevState.mode + 1) % modes.length,
      };
    });
  }

  return (
    <Box>
      <Grid container spacing="1" justify="space-evenly" alignItems="flex-start">
        <Grid item>
          <FanButton />
        </Grid>
        <Grid item>
          <AcButton variant="contained" onClick={changeMode}>
            MODE
          </AcButton>
        </Grid>
        <Grid item>
          <TempratureControls onPlus={increaseTemprature} onMinus={decreaseTemprature} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <PowerButton />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Controls;
