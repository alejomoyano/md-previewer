import React from "react";
import "codemirror/lib/codemirror.css";
// import "codemirror/theme/material.css";
import "codemirror/mode/markdown/markdown";
import { Controlled as CodeMirror } from "react-codemirror2";
import "../styles/style.css";

// componente que contiene el editor de md
export default function Editor({ onChange, value }) {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className="split left">
      <CodeMirror
        onBeforeChange={handleChange}
        options={{
          lint: true,
          mode: "markdown",
          lineNumbers: true,
          // theme: "material",
        }}
        value={value}
      />
    </div>
  );
}
