import { Divider, withStyles } from "@material-ui/core";

const AcDivider = withStyles((theme) => ({
    root: {
        height: '1px',
        backgroundColor: 'black',
    },
  }))(Divider);

export default AcDivider;
