import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";

export const Navbar = ({ showModal, loginButtonText }) => {
  const authUser = () => {
    showModal(true);
  };
  const save = () => {};
  const get = () => {};

  return (
    <Nav className="nav">
      <Nav.Item>
        <Button onClick={authUser}>{loginButtonText}</Button>
      </Nav.Item>
      <Nav.Item>
        <Button onClick={save}>Save</Button>
      </Nav.Item>
      <Nav.Item>
        <Button onClick={get}>Get</Button>
      </Nav.Item>
    </Nav>
  );
};
