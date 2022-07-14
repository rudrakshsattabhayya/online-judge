import { React, useState } from "react";
import useStyles from "./submissionBoxStyles";

const SubmissionBox = () => {
  const classes = useStyles();
  const [submissions, updatesubmissions] = useState([
    {
      time: "11:09",
      link: "https://www.google.com",
    },
    {
        time: "12:09",
        link: "www.google.com",
    },
  ]);
  return (
    <div>
      <div className={classes.submssionBox}>
        <h3 className={classes.submssionBoxTitle}>{"Submission Box"}</h3>
        <div className={classes.content}>
          <div className={classes.pastsubmissionBox}>
          {submissions.length>0 && submissions.map((submission, index) => {
            return (
            <div className={classes.pastsubrow} key={index}>
              <div className={classes.pastsubrowsr}>{index+1}</div>
              <div className={classes.pastsubrowtime}>{submission.time}</div>
              <div className={classes.pastsubrowlink}>
                <a href={submission.link}>link</a>
              </div>
            </div>
          )})}
          </div>
          <div>
          <form className={classes.firstform}>
            <input type="file"></input>
            <button type="submit" className={classes.submit}>
              submit
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SubmissionBox };
