import chroma from "chroma-js";

const colorBoxStyles = {
    colorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0px auto",
        marginBottom: "-3.5px",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover button": {
            opacity: "1"
        }
    },
    boxContent: {
        width: "100%",
        position: "absolute",
        left: "0px",
        bottom: "10px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyOverlay: {
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        opacity: "0",
        zIndex: "0",
        transform: "scale(0.1)"
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore: {
        width: "60px",
        height: "30px",
        position: "absolute",
        right: "0px",
        bottom: "0px",
        border: "none",
        background: "rgba(255, 255, 255, 0.3)",
        color: props =>
            chroma(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.6)" : "white",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: props =>
            chroma(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.6)" : "white",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: "0"
    },
    showOverlay: {
        position: "absolute",
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10"
    },
    copyMessage: {
        position: "fixed",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1": {
            width: "100%",
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            textAlign: "center",
            marginBottom: "0px",
            padding: "1rem",
            textTransform: "uppercase"
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100"
        }
    },
    showMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s"
    }
}

export default colorBoxStyles;