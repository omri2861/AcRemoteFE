import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';
import ToysIcon from '@material-ui/icons/Toys';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const modes = [ChangeHistoryIcon, AcUnitIcon, WbSunnyIcon, ToysIcon, OpacityIcon];

export {modes};

function ModeBar(props) {
  function renderModeIcons(mode) {
    return modes.map((ModeIcon, index) => (
      // We don't use conditionaly rendering on purpose, since we want the icons to move like in the
      // real remote
      <ModeIcon style={{visibility: index === mode ? 'visible' : 'hidden'}} />
    ));
  }

  return renderModeIcons(props.mode);
}

export default ModeBar;
