import { useState } from "react";
import useStyles from "./filterBoxStyles";
import tagStyles from "./tag_css";
import Box from "@mui/material/Box";

const FilterBox = () => {
  const [lower_lim, update_lower_lim] = useState(800);
  const [upper_lim, update_upper_lim] = useState(2700);
  const [taglist, update_tag_list] = useState([
    { name: "dp", select: false },
    { name: "greedy", select: false },
    { name: "constructive algo", select: false },
  ]);
  const [numofoptions, updatenum] = useState(0);
  const css = useStyles();

  const Tag = ({ name, index }) => {
    const css = tagStyles();
    const removeTag = (elem) => {
      let temparr = taglist;
      temparr[parseInt(elem.target.name)].select = false;
      update_tag_list(temparr);
      updatenum(numofoptions - 1);
    };
    return (
      <>
        <Box display="inline" className={css.tagbox}>
          <span className={css.tagspan}>{name}</span>{" "}
          <img name={index} onClick={removeTag} src="close.png" alt="tag" />
        </Box>
      </>
    );
  };

  const handleTagOption = () => {
    let svalue = document.getElementById("tagselect").value;
    let temparr = taglist;
    let i, elem;
    if (svalue !== "default") {
      elem = taglist.find((elem, index) => {
        if (elem.name === svalue) {
          i = index;
          return elem;
        }
      });
    }
    if (svalue !== "default" && !elem.select) {
      elem.select = true;
      updatenum(numofoptions + 1);
      temparr[i] = elem;
      update_tag_list(temparr);
    }
  };

  return (
    <>
      <div className={css.filterBox}>
        <h3 className={css.filterBoxTitle}>{"Filter Box"}</h3>
        <div>
          <form className={css.firstform}>
            <label id="label difficulty-label">Difficulty: </label>
            <input
              className={css.valueInputBox}
              type="number"
              min="800"
              max="2700"
              value={lower_lim}
              onChange={(e) => {
                update_lower_lim(e.target.value);
              }}
            />
            -
            <input
              className={css.valueInputBox}
              type="number"
              min="800"
              max="2700"
              value={upper_lim}
              onChange={(e) => {
                update_upper_lim(e.target.value);
              }}
            />
            <div className={css.selectedtagsdiv}>
              {numofoptions >= 0 &&
                taglist.map((elem, index) => {
                  if (elem.select)
                    return <Tag name={elem.name} key={index} index={index} />;
                })}
            </div>
            <div className={css.tagboxdiv}>
              <label className={css.taglabel}>
                Tags:
                {numofoptions >= 0 && (
                  <select
                    className={css.tagSelect}
                    onChange={handleTagOption}
                    id="tagselect"
                  >
                    <option value="default">default</option>
                    combine-tags-by-or
                    {taglist.map((tag, index) => {
                      if (!tag.select)
                        return (
                          <option key={index} value={tag.name}>
                            {tag.name}
                          </option>
                        );
                    })}
                  </select>
                )}
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FilterBox;
