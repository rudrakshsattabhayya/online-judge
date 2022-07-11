import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Table: {
    fontFamily: "Arial, Helvetica, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
  },
  headings: {
    border: "1px solid #ddd",
    padding: "4px",
    paddingTop: "12px",
    paddingBottom: "12px",
    textAlign: "left",
    backgroundColor: "#115c02",
    color: "white",
  },
  rowprop: {
    border: "1px solid #ddd",
    padding: "8px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "0.7fr 6fr 1fr 0.8fr",
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
}));

export default useStyles;

