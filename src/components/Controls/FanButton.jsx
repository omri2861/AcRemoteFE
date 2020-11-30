import React from 'react';

import AcButton from "./AcButton";
import ToysRoundedIcon from '@material-ui/icons/ToysRounded';

function FanButton(props) {
  return (
    // TODO: Find a way to pass props correctly
    <AcButton variant="contained" onClick={props.onClick}>
      <ToysRoundedIcon />
    </AcButton>
  );
}

export default FanButton;
