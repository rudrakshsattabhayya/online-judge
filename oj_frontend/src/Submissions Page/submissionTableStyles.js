import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  submmisionsPage: {
    padding: "3rem",
  },
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
    gridTemplateColumns: "1fr 6fr 1fr 2fr",
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
  hiden: {
      display: "none",
      visibility: "hidden",
  },

  active: {},
  pagination: {
    display: "inline-block",
    marginTop: "2rem",
    "& div": {
      "&$active": {
        backgroundColor: "#4CAF50",
        color: "white",
        borderRadius: "5px",
      },
      "&:hover:not($active)": {
        backgroundColor: "#ddd",
        borderRadius: "5px",
      },
      color: "black",
      float: "left",
      padding: "8px 16px",
      margin: "0 2px 0 2px",
      textDecoration: "none",
    },
  },
}));

export default useStyles;
