import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

export const LoginModal = ({ show, setShow, className }) => {
  return (
    <Modal className={className} show={show}>
      <Modal.Header>Login</Modal.Header>
      <Modal.Body>
        <Form></Form>
        <Form></Form>
        <Button></Button>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </Button>
        <Button>Login</Button>
      </Modal.Footer>
    </Modal>
  );
};
