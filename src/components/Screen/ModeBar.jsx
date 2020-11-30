import Box from '@material-ui/core/Box';

import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';
import ToysIcon from '@material-ui/icons/Toys';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const modes = [ChangeHistoryIcon, AcUnitIcon, WbSunnyIcon, ToysIcon, OpacityIcon];

export {modes};

function ModeBar(props) {
  return (
    <Box>
      {modes.map((ModeIcon, index) => (
        // We don't use conditionaly rendering on purpose, since we want the icons to move like in the
        // real remote
        <ModeIcon style={{visibility: index === props.mode ? 'visible' : 'hidden'}} />
      ))}
    </Box>
  );
}

export default ModeBar;
