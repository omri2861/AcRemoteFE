import { Button, withStyles } from "@material-ui/core";

const AcButton = withStyles((theme) => ({
    root: {
      // TODO: override universal colors, so it can be changed easily
      backgroundColor: theme.palette.grey[600],
      color: theme.palette.common.white,
    },
  }))(Button);

export default AcButton;
