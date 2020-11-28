import {ButtonGroup} from '@material-ui/core';
import AcButton from './AcButton';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function TempratureControls(props) {
  return (
    <ButtonGroup orientation="vertical">
      <AcButton variant="contained" onClick={props.onPlus}>
        <AddIcon />
      </AcButton>
      <AcButton variant="contained" onClick={props.onMinus}>
        <RemoveIcon />
      </AcButton>
    </ButtonGroup>
  );
}

export default TempratureControls;
