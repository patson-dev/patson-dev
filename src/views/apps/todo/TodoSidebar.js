import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  X,
  Info,
  Trash,
  List,
  PlusSquare,
  Archive,
  CheckSquare,
} from "react-feather";
import { connect } from "react-redux";
import { changeFilter } from "../../../redux/actions/todo/index";
class TodoSidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span
          className="sidebar-close-icon"
          onClick={() => this.props.mainSidebar(false)}
        >
          <X size={15} />
        </span>
        <div className="todo-app-menu">
          <div className="add-task">
            <Button.Ripple
              block
              className="btn-block my-1 square font-mono"
              color="primary"
              onClick={() => {
                this.props.addTask("open");
                this.props.mainSidebar(false);
              }}
            >
              <PlusSquare />
              &nbsp;ADD TASK
            </Button.Ripple>
          </div>
          <PerfectScrollbar
            className="sidebar-menu-list"
            options={{
              wheelPropagation: false,
            }}
          >
            <ListGroup className="font-medium-1">
              <ListGroupItem
                className="border-0 pt-0"
                action
                onClick={() => {
                  this.props.changeFilter("all");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/all"
                    ? true
                    : false
                }
              >
                <List size={15} />
                <span className="align-middle ml-1">All Tasks</span>
              </ListGroupItem>
            </ListGroup>
            <hr />
            <h5 className="mt-2 mb-1 pt-25">Filters</h5>
            <ListGroup className="font-medium-1">
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("important");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/important"
                    ? true
                    : false
                }
              >
                <Info size={22} />
                <span className="align-middle ml-1">Important</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("completed");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/completed"
                    ? true
                    : false
                }
              >
                <CheckSquare size={22} />
                <span className="align-middle ml-1">Completed</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("starred");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/starred"
                    ? true
                    : false
                }
              >
                <Archive size={22} />
                <span className="align-middle ml-1">Archived</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("trashed");
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/trashed"
                    ? true
                    : false
                }
              >
                <Trash size={22} />
                <span className="align-middle ml-1">Deleted</span>
              </ListGroupItem>
            </ListGroup>
          </PerfectScrollbar>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { changeFilter })(TodoSidebar);
