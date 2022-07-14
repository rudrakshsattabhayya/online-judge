import { useState } from "react";
import useStyles from "./submissionTableStyles";
import classNames from "classnames";

const SubmissionTable = () => {
  const [rowdata, updaterowdata] = useState([
    {
      id: "53",
      name: "Optimal Path",
      accuracy: "91%",
      latestSublink: "https://github.com/",
      dateandtime: "11:00",
    },
    {
      id: "52",
      name: "Optimal Path",
      accuracy: "91%",
      latestSublink: "https://github.com/",
      dateandtime: "11:00",
    },
  ]);
  const handlePagination = (event) => {
    const x = parseInt(event.target.id);
    updateActive(x);
    updateStartIndex(x * 20);
    updateEndIndex(x * 20 + 19);
    updaterowdata(rowdata);
  };
  const [startIndex, updateStartIndex] = useState(0);
  const [endIndex, updateEndIndex] = useState(19);
  const [pagination, updatepagval] = useState(
    new Array(parseInt(rowdata.length / 20) + 1).fill(0)
  );
  const [activeindex, updateActive] = useState(0);
  const classes = useStyles();
  return (
    <div className={classes.submmisionsPage}>
      <table className={classes.Table}>
        <tbody>
          <tr className={classes.row}>
            <th className={classNames(classes.headings)}>Sr No</th>
            <th className={classNames(classes.headings)}>Problems</th>
            <th className={classNames(classes.headings)}>Accurcy</th>
            <th className={classNames(classes.headings)}>Date&Time</th>
          </tr>
          {rowdata.map((elem, index) => {
            if (index >= startIndex && index <= endIndex) {
              return (
                <tr className={classes.row} key={elem.id}>
                  <td className={classNames(classes.rowprop)}>{index + 1}</td>
                  <td className={classNames(classes.rowprop)}>{elem.name}</td>
                  <td className={classNames(classes.rowprop)}>
                    {elem.accuracy}
                  </td>
                  <td className={classNames(classes.rowprop)}>
                    <a href={elem.latestSublink}>{elem.dateandtime}</a>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div>
        <div className={classes.pagination}>
          <div>&laquo;</div>
          {pagination.map((elem, index) => {
            return (
              <div
                id={index}
                onClick={handlePagination}
                key={index}
                className={
                  activeindex === index ? classes.active : classes.deactive
                }
              >
                {index + 1}
              </div>
            );
          })}
          <div>&raquo;</div>
        </div>
      </div>
    </div>
  );
};

export { SubmissionTable };
