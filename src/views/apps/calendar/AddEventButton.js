import React from "react";
import { Button } from "reactstrap";
import { PlusSquare } from "react-feather";
import { connect } from "react-redux";
import {
  handleSidebar,
  handleSelectedEvent,
} from "../../../redux/actions/calendar/index";
const AddEventButton = (props) => {
  return (
    <Button.Ripple
      color="primary"
      onClick={() => {
        props.handleSidebar(true);
        props.handleSelectedEvent(null);
      }}
      className="d-sm-block d-none square"
    >
      {" "}
      <PlusSquare size={20} />{" "}
      <span className="align-middle">&nbsp;Add Event</span>
    </Button.Ripple>
  );
};

export default connect(null, { handleSidebar, handleSelectedEvent })(
  AddEventButton
);
