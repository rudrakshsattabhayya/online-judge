import React from "react";
import useStyles from "./dashboardstyles";
import FilterBox from "./filterBox";
import { Table } from "./Problems Table/Table";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.dashboard}>

        <div className={classes.problemtablediv}>
          <Table />
        </div>

        <div className={classes.sidebar}>
            <div className={classes.filterboxdiv}>
                <FilterBox />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
