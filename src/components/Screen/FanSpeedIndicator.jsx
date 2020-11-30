import {Box, Typography} from "@material-ui/core";

import SignalCellular1BarIcon from '@material-ui/icons/SignalCellular1Bar';
import SignalCellular2BarIcon from '@material-ui/icons/SignalCellular2Bar';
import SignalCellular3BarIcon from '@material-ui/icons/SignalCellular3Bar';
import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar';

const fanSpeedIcons = [
  <SignalCellular1BarIcon />,
  <SignalCellular2BarIcon />,
  <SignalCellular3BarIcon />,
  <SignalCellular4BarIcon />,
];

export {fanSpeedIcons as fanSpeeds};

function FanSpeedIndicator(props) {
    return (<Box textAlign="right">
        <Typography
          style={{
              // Using the visibility style instead of conditional rending, since we don't want the
              // remote to sacle when auto mode is selected
            visibility: props.fanSpeed === fanSpeedIcons.length - 1 ? 'visible' : 'hidden',
          }}>
          AUTO
        </Typography>
        {fanSpeedIcons[props.fanSpeed]}
      </Box>);
}

export default FanSpeedIndicator;
