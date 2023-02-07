import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/markdown/markdown";
import { Controlled as CodeMirror } from "react-codemirror2";
import "../styles/App.css";

// componente que contiene el editor de md
export function Editor({ onChange, value }) {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className="editor-container">
      <CodeMirror
        className="editor"
        onBeforeChange={handleChange}
        options={{
          lint: true,
          mode: "markdown",
          // theme: "material",
        }}
        value={value}
      />
    </div>
  );
}
