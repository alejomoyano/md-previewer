import React from "react";
import ReactMarkdown from "react-markdown";
import "../styles/App.css";

export function Viewer({ value }) {
  return (
    <div className="viewer-container">
      <ReactMarkdown className="viewer" children={value} />
    </div>
  );
}
