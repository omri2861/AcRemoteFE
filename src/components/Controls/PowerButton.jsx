import React from 'react';

import {Button} from '@material-ui/core';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

function PowerButton() {
  return (
    <Button variant="contained" color="primary">
      <PowerSettingsNewIcon style={{color: 'white'}} />
    </Button>
  );
}

export default PowerButton;
