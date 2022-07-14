import React from 'react'
import useStyles from './ioBoxStyles';

const IoBox = ({type, file}) => {
    const classes = useStyles();
  return (
    <div>
        <div className={classes.title}>{type}</div>
        <div className={classes.ios}></div>
    </div>
  )
}

export {IoBox}