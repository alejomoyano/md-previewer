import Editor from "./components/Editor";
import React, { useState } from "react";
import Viewer from "./components/Viewer";
import "./styles/style.css";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <div className="all">
      <Editor onChange={setValue} value={value} />
      <Viewer value={value} />
    </div>
  );
}
