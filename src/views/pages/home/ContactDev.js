import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ButtonGroup } from "reactstrap";
import { Linkedin, Twitter } from "react-feather";

class ContactDev extends React.Component {
  state = {
    modal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Button
          color="primary"
          className="square mr-1"
          onClick={this.toggleModal}
        >
          Hire Patson
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className="modal-dialog-centered"
        >
          <ModalHeader toggle={this.toggleModal}>
            Get in touch with Patson on:
          </ModalHeader>
          <ModalBody className="modal-dialog-centered">
            <ButtonGroup>
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
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
export default ContactDev;
