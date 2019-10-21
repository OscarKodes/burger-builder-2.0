import React, {Component} from 'react';
import Fragment from '../Fragment/Fragment';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class layout extends Component {

    state = {
        showSideDrawer: false
    }

    toggleSideDrawer = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer};
        });
    }

    render() {
        return (
            <Fragment>
                <Toolbar toggleSideDrawer={this.toggleSideDrawer} />
                <SideDrawer 
                    show={this.state.showSideDrawer}
                    clicked={this.toggleSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default layout;