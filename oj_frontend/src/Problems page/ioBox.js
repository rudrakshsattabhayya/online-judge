import React from 'react'
import useStyles from './ioBoxStyles';

const IoBox = ({type, file}) => {
    const classes = useStyles();
  return (
    <div className={classes.iobox}>
        <div className={classes.title}>{type}</div>
        <div className={classes.ios}>
          <p>2</p>
          <p>4 3</p>
          <p>3 2</p>
          <p>32 23</p>
          <p>3 12</p>
        </div>
    </div>
  )
}

export {IoBox}