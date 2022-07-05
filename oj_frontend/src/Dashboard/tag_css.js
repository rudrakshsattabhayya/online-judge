import {makeStyles} from "@mui/styles";

// font-family: verdana,arial,sans-serif;
// font-size: 1.4rem;
// border: 1px solid rgb(185, 185, 185);
// position: relative;
// margin: 2px 2px 2px 0;
// padding: 0 3px 2px 3px;
// background-color: #f0f0f0;
// float: left;


const tagStyles = makeStyles((theme) => ({
    tagbox: {
        margin: "0.2rem",
        backgroundColor: "#F0F0F0",
        border: "0.6px solid",
        borderColor: "grey",
        borderRadius: "0.2rem",
        padding: "0 0 0.1rem 0.1rem"
    },
    closeButton: {
        width: "1%",
    }
}))

export default tagStyles;
