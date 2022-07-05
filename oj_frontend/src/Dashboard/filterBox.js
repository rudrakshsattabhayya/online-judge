import { useState } from "react";
import Tag from "./tag";
import useStyles from "./filterBoxStyles"

const FilterBox = () => {
  const [lower_lim, update_lower_lim] = useState(800);
  const [upper_lim, update_upper_lim] = useState(2700);
  const [taglist, update_tag_list] = useState([
    { name: "dp", select: false },
    { name: "greedy", select: false },
    { name: "constructive algo", select: false },
  ]);
  const [numofoptions, updatenum] = useState(0);
  const [selectedtags, updateselectedtags] = useState([]);
  const css = useStyles();

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
      updateselectedtags([...selectedtags, elem.name]);
    }
  };

  const removeTags = () => {};

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
              {selectedtags.map((tag, index) => (
                <Tag name={tag} key={index} />
              ))}
            </div>
            <div className={css.tagboxdiv}>
              <label className={css.taglabel}>
                Tags:
                {numofoptions >= 0 && (
                  <select className={css.tagSelect} onChange={handleTagOption} id="tagselect">
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
