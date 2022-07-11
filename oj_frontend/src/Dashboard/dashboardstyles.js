import {makeStyles} from "@mui/styles"

const useStyles = makeStyles((theme) => ({
   dashboard: {
    display: "grid",
    padding: "6rem 1.5rem 0 3rem",
    gridTemplateColumns: "3fr 1fr",
    rowGap: "3rem",
    columnGap: "3rem"
   },
   problemtablediv: {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "1",
    gridRowEnd: "3",
    
   },
   sidebar: {
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: "5rem",
   },
   filterboxdiv: {
    paddingTop: "2rem"
   },
   submissiondiv: {
    
   }
}));

export default useStyles;