import React from "react";
import "../styles/style.css";
import ReactMarkdown from "react-markdown";

export default function Viewer({ value }) {
  return (
    <div className="split right">
      <ReactMarkdown children={value} />
    </div>
  );
}
