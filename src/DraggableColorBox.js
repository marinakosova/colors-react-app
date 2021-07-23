import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
        width: "20%",
        height: "25vh", // must be 25% !!!
        margin: "0px auto",
        marginBottom: "-3.5px",
        display: "inline-block",
        position: "relative",
        cursor: "pointer"
    }
};

const DraggableColorBox = (props) => {
    return (
        <div className={props.classes.root} style={{ backgroundColor: props.color }}>
            {props.color}
        </div>
    );
}

export default withStyles(styles)(DraggableColorBox);
