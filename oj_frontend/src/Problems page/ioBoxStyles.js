import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  iobox: {
    border: "1.2px solid #888",
    marginBottom: "1rem",
  },
  title: {
    borderBottom: "1.2px solid #888",
    paddingLeft: "3px",
  },
  ios: {
    backgroundColor: "#efefef",
    "& p": {
      margin: "0",
    },
  },
}));

export default useStyles;
