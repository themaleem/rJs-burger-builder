import React, { useState } from "react";
import { connect } from "react-redux";

import Aux from "../Auxiliary";
import styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout=(props)=> {
  const [showSideDrawer, setShowSideDrawer] = useState(false)
  
  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };
  
  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };
  
  return(
    <Aux>
        <Toolbar drawerToggleClicked={sideDrawerToggleHandler} auth={props.isAuthenticated} />
        <SideDrawer
          open={showSideDrawer}
          closed={sideDrawerClosedHandler}
          auth={props.isAuthenticated}
        />
        <main className={styles.Content}>{props.children}</main>
      </Aux>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Layout);
