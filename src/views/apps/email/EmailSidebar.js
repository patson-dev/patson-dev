import React from "react";
import { FormGroup, Button, ListGroup, ListGroupItem } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  X,
  Edit,
  Info,
  Trash,
  PlusSquare,
  ArrowRightCircle,
  Archive,
  Inbox,
} from "react-feather";
import { changeFilter } from "../../../redux/actions/email/index";
import { connect } from "react-redux";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import Suggestions from "../../pages/profile/Suggestions";
class EmailSidebar extends React.Component {
  state = {
    modal: false,
  };

  render() {
    return (
      <React.Fragment>
        
        <div
          className="sidebar-close-icon"
          onClick={() => this.props.mainSidebar(false)}
        >
          <X size={18} />
        </div>
        <div className="email-app-menu">
          <FormGroup className="form-group-compose text-center compose-btn">
            <Button.Ripple
              block
              className="my-2 btn-block square"
              color="primary"
              onClick={() => {
                this.props.handleComposeSidebar("open");
                this.props.mainSidebar(false);
              }}
            >
              <PlusSquare size={20} className="font-weight-bold" />
              <span className="align-middle ml-50 font-mono">NEW MAIL</span>
            </Button.Ripple>
          </FormGroup>
          <PerfectScrollbar
            className="sidebar-menu-list"
            options={{
              wheelPropagation: false,
            }}
          >
            <ListGroup className="list-group-messages font-medium-1">
              <ListGroupItem
                onClick={() => this.props.changeFilter("inbox")}
                active={
                  "/email/inbox" === this.props.routerProps.location.pathname
                }
                className="border-0 cursor-pointer pt-0"
              >
                <Inbox size={21} />
                <span className="align-middle ml-1">Inbox</span>
                <div className="badge badge-pill badge-primary mt-25 float-right">
                  <span className="align-middle">3</span>
                </div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("sent")}
                active={
                  "/email/sent" === this.props.routerProps.location.pathname
                }
                className="border-0 cursor-pointer"
              >
                <ArrowRightCircle size={21} />
                <span className="align-middle ml-1">Sent Mail</span>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("draft")}
                active={
                  "/email/draft" === this.props.routerProps.location.pathname
                }
                className="border-0 cursor-pointer"
              >
                <Edit size={21} />
                <span className="align-middle ml-1">Draft</span>
                <div className="badge badge-pill badge-info mt-25 float-right">
                  <span className="align-middle">4</span>
                </div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => {
                  this.props.changeFilter("starred");
                }}
                active={
                  "/email/starred" === this.props.routerProps.location.pathname
                }
                className="border-0 cursor-pointer"
              >
                <Archive size={21} />
                <span className="align-middle ml-1">Archived</span>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("spam")}
                active={
                  "/email/spam" === this.props.routerProps.location.pathname
                }
                className="border-0 cursor-pointer"
              >
                <Info size={21} />
                <span className="align-middle ml-1">Junk</span>
                <div className="badge badge-pill badge-warning mt-25 float-right">
                  <span className="align-middle">3</span>
                </div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("trash")}
                active={
                  "/email/trash" === this.props.routerProps.location.pathname
                }
                className="border-0 cursor-pointer"
              >
                <Trash size={21} />
                <span className="align-middle ml-1">Deleted</span>
              </ListGroupItem>
            </ListGroup>
            <hr />
            <h3 className="my-2 pt-25">CONTACTS</h3>
            <Suggestions />
          </PerfectScrollbar>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { changeFilter })(EmailSidebar);
