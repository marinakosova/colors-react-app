export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh"
    },
    logo: {
        height: "100%",
        marginRight: "15px",
        padding: "0px 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black"
        }
    },
    slider: {
        width: "340px",
        margin: "0px 10px",
        display: "inline-block",
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px",
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none"
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    }
}