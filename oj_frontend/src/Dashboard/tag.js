import tagStyles from "./tag_css";
import Box from "@mui/material/Box";

const Tag = ({ name }) => {
  const css = tagStyles();
  return (
    <>
      <Box
        display="inline"
        className={css.tagbox}
      >
        <span className={css.tagspan}>{name}</span>{" "}
          <img src="close.png" alt="close" />
      </Box>
    </>
  );
};

export default Tag;
