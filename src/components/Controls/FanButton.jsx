import React from 'react';

import AcButton from "./AcButton";
import ToysRoundedIcon from '@material-ui/icons/ToysRounded';

function FanButton() {
  return (
    <AcButton variant="contained">
      <ToysRoundedIcon />
    </AcButton>
  );
}

export default FanButton;
