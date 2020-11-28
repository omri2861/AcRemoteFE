import React from 'react';
import {Grid, Box} from '@material-ui/core';

import AcButton from './AcButton';
import FanButton from './FanButton';
import TempratureControls from './TempratureConrtols';
import PowerButton from './PowerButton';

function Controls(props) {
  function increaseTemprature() {
    props.setState((prevState) => {
      return {
        ...prevState,
        temprature: prevState.temprature + 1,
      };
    });
  }

  function decreaseTemprature() {
    props.setState((prevState) => {
      return {
        ...prevState,
        temprature: prevState.temprature + 1,
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
          <AcButton variant="contained">MODE</AcButton>
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
