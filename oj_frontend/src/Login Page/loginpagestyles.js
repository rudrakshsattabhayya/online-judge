import {makeStyles} from "@mui/styles"
// import "https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300&display=swap"

const useStyles = makeStyles((theme) => ({
    loginbox: {
        margin: "auto",
        marginTop: "10%",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        width: "30%",
        borderRadius: "5px",
        "&:hover, &:focus": {
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
        }
    },
    headingbox: {
       backgroundColor: "black",
       borderRadius: "5px 5px 0 0",
       borderBottom: "3px solid green",
    },
    logoimg: { 
        display: "block",
        margin: "0 auto",
    },
    buttonbox: {
        "& h2":{
            fontFamily:  "sans-serif",
            display: "block",
            textAlign: "center"
        },
        paddingBottom: "0.5em"
    },
    googlebuttondiv: {
        margin: "0.5em 0 1em 0",
    },
    googlebutton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));

export default useStyles;