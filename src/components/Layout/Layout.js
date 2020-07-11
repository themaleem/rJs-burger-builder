import React from "react";
import PropTypes from "prop-types";
import Aux from "../../hoc/Auxiliary";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <Aux>
      <div>layout, sidebar, side drawer</div>
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
}

Layout.propTypes = {};
export default Layout;
