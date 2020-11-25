import React from "react";

import { Card, makeStyles, Divider } from "@material-ui/core";

import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        // backgroundColor: "#8BAC0F",
        backgroundColor: "#616b3c",
    },
    test: {
        height: "1px",
        color: "black",
        backgroundColor: "black",
    },
}));

function Screen() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <AcUnitIcon />
            <Divider className={classes.test} />
            <p style={{ textAlign: "right" }}>9:17</p>
            <Divider className={classes.test} />
            <p>21&#xb0;</p>
        </Card>
    );
}

export default Screen;
