import { useState } from "react";
import useStyles from "./tableStyles";
import classNames from "classnames";

const Table = () => {
  const [rowdata, updaterowdata] = useState([
    {
      id: "53",
      name: "Optimal Path",
      difficulty: "Easy",
      accuracy: "91%",
      solved: false,
    },
    {
      id: "43",
      name: "Random Path",
      difficulty: "Medium",
      accuracy: "74%",
      solved: true,
    },
  ]);
  const classes = useStyles();
  return (
    <table className={classes.Table}>
      <tbody>
        <tr className={classes.row}>
          <th className={classNames(classes.headings)}>Sr No</th>
          <th className={classNames(classes.headings)}>Problems</th>
          <th className={classNames(classes.headings)}>Difficulty</th>
          <th className={classNames(classes.headings)}>Accuracy</th>
        </tr>
        {rowdata.map((elem, index) => {
          let name = elem.name;
          if (elem.solved) name = name + " (Solved)";

          return (
            <tr className={classes.row} key={elem.id}>
              <td className={classNames(classes.rowprop)}>{index + 1}</td>
              <td className={classNames(classes.rowprop)}>{name}</td>
              <td className={classNames(classes.rowprop)}>{elem.difficulty}</td>
              <td className={classNames(classes.rowprop)}>{elem.accuracy}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { Table };
