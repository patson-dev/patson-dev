import React from "react";
import { Navbar, Button, ButtonGroup } from "reactstrap";
import classnames from "classnames";
import NavbarBookmarks from "./NavbarBookmarks";

import { Linkedin, Twitter } from "react-feather";

const ThemeNavbar = (props) => {
  const colorsArr = ["primary", "danger", "success", "info", "warning", "dark"];
  const navbarTypes = ["floating", "static", "sticky", "hidden"];
  return (
    <React.Fragment>
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <Navbar
        className={classnames(
          "header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow",
          {
            "navbar-light":
              props.navbarColor === "default" ||
              !colorsArr.includes(props.navbarColor),
            "navbar-dark": colorsArr.includes(props.navbarColor),
            "bg-primary":
              props.navbarColor === "primary" && props.navbarType !== "static",
            "bg-danger":
              props.navbarColor === "danger" && props.navbarType !== "static",
            "bg-success":
              props.navbarColor === "success" && props.navbarType !== "static",
            "bg-info":
              props.navbarColor === "info" && props.navbarType !== "static",
            "bg-warning":
              props.navbarColor === "warning" && props.navbarType !== "static",
            "bg-dark":
              props.navbarColor === "dark" && props.navbarType !== "static",
            "d-none": props.navbarType === "hidden" && !props.horizontal,
            "floating-nav":
              (props.navbarType === "floating" && !props.horizontal) ||
              (!navbarTypes.includes(props.navbarType) && !props.horizontal),
            "navbar-static-top":
              props.navbarType === "static" && !props.horizontal,
            "fixed-top": props.navbarType === "sticky" || props.horizontal,
            scrolling: props.horizontal && props.scrolling,
          }
        )}
      >
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div
              className="navbar-collapse d-flex justify-content-between align-items-center"
              id="navbar-mobile"
            >
              <div className="bookmark-wrapper">
                <NavbarBookmarks
                  sidebarVisibility={props.sidebarVisibility}
                  handleAppOverlay={props.handleAppOverlay}
                />
              </div>
              {props.horizontal ? (
                <div className="logo d-flex align-items-center">
                  <h2 className="text-primary brand-text mb-0">Dev</h2>
                </div>
              ) : null}
              <ButtonGroup className="mr-1">
                <a href="https://www.linkedin.com/in/patsonnyandoro">
                  <Button.Ripple color="primary" className="square">
                    <Linkedin size={15} />
                  </Button.Ripple>{" "}
                </a>
                <a href="https://twitter.com/patsondev">
                  <Button.Ripple color="primary" className="square">
                    <Twitter size={15} />
                  </Button.Ripple>{" "}
                </a>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default ThemeNavbar;
