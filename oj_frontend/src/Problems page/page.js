import React from "react";
import useStyles from "./pageStyles";
import classNames from "classnames";
import {SubmissionBox} from "./submissionBox";
import {prob_statement} from "./prob_stmt";
import {IoBox} from "./ioBox";

const Problem = () => {
  const classes = useStyles();
  const problem = prob_statement();
  return (
    <div>
      <div className={classNames(classes.page)}>
        <div className={classNames(classes.leftpage)}>
          <div className={classNames(classes.title)}>Problem Statement</div>
          <div className={classNames(classes.prob_statement)}>{problem}</div>
          <div className={classNames(classes.inputbox)}><IoBox type="Inputs" /></div>
          <div className={classNames(classes.outputbox)}><IoBox type="Outputs" /></div>
        </div>
        <div className={classNames(classes.rightpage)}>
          <div className={classNames(classes.submissionbox)}><SubmissionBox /></div>
          <div className={classNames(classes.submissionbox)}><SubmissionBox /></div>
        </div>
      </div>
    </div>
  );
};

export { Problem };
