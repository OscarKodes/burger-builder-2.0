import React from 'react';
import classes from './SideDrawerToggler.module.css';

const sideDrawerToggler = (props) => {

    return (
        <div onClick={props.clicked} className={classes.SideDrawerToggler}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default sideDrawerToggler;