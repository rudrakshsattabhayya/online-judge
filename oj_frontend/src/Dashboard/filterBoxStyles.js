import {makeStyles} from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    filterBox: {
            margin: "0.5rem",
            width: "17%",
            border: "2px solid",
            borderRadius: "0.5rem",
            padding: "0.5rem",
    },
    filterBoxTitle: {
            margin: "0.1rem 0 0.8rem 0.2rem",
            border: "1px solid",
            borderRadius: "0.2rem",
    },
    valueInputBox: {
            width: "20%",
            margin: "0.2rem"
    },
    selectedtagsdiv: {
        margin: "0.1rem"
    },
    firstform: {
        margin: "0 0 0.2rem 0"
    },
    tagboxdiv: {
        marginTop: "0.5rem"
    },
    tagSelect: {
        marginLeft: "0.4rem",
        width: "68%"
    }
}));

export default useStyles;