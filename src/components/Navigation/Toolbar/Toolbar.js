import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggler from '../SideDrawer/SideDrawerToggler/SideDrawerToggler';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <SideDrawerToggler clicked={props.toggleSideDrawer} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;