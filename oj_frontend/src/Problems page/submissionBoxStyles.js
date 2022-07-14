import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  submssionBox: {
    margin: "0.5rem",
    width: "80%",
    border: "2px solid",
    borderRadius: "0.5rem",
    padding: "0.5rem",
  },
  submssionBoxTitle: {
    margin: "0.1rem 0 0.8rem 0.2rem",
    border: "1px solid",
    borderRadius: "0.2rem",
  },
  pastsubmissionBox: {
    marginBottom: "1rem",
  },
  pastsubrow: {
    display: "grid",
    gridTemplateColumns: "0.5fr 2.5fr 0.7fr",
    border: "1px solid #ddd",
  },
  pastsubrowsr: {
    border: "1px solid #ddd",
    textAlign: "center",
  },
  pastsubrowtime: {
    border: "1px solid #ddd",
    paddingLeft: "0.5rem",
  },
  pastsubrowlink: {
    border: "1px solid #ddd",
    textAlign: "center",
  },
}));

export default useStyles;
