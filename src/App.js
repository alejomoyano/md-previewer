import { Editor, Viewer, Navbar, LoginModal } from "./components";
import React, { useState } from "react";
import "./styles/App.css";

export default function App() {
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <LoginModal className="login-modal" show={showModal} setShow={setShowModal} />
      <Navbar showModal={setShowModal} />
      <Editor onChange={setValue} value={value} />
      <Viewer value={value} />
    </div>
  );
}
