import React from 'react';
import {Grid, Button, ButtonGroup, Box, withStyles} from '@material-ui/core';

import ToysRoundedIcon from '@material-ui/icons/ToysRounded';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const AcButton = withStyles((theme) => ({
  root: {
    // TODO: override universal colors, so it can be changed easily
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.common.white,
  },
}))(Button);

function Controls(props) {
  return (
    <Box>
      <Grid container spacing="1" justify="space-evenly" alignItems="flex-start">
        <Grid item>
          <AcButton variant="contained">
            <ToysRoundedIcon />
          </AcButton>
        </Grid>
        <Grid item>
          <AcButton variant="contained">MODE</AcButton>
        </Grid>
        <Grid item>
          <ButtonGroup orientation="vertical">
            <AcButton variant="contained">
              <AddIcon />
            </AcButton>
            <AcButton variant="contained">
              <RemoveIcon />
            </AcButton>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Button variant="contained" color="primary">
            <PowerSettingsNewIcon style={{color: 'white'}} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Controls;
