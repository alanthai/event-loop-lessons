import React from 'react';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';
import AceEditor from 'react-ace';


if (brace) {} // hack to get rid of unused var error

function highlight(rows) {
  const [startRow, endRow] = !Array.isArray(rows)
    ? [rows, rows]
    : rows;

  return {
    startRow: startRow - 1,
    startCol: 0,
    endRow: endRow - 1,
    endCol: 1,
    className: 'highlight',
    type: 'fullLine',
  };
}

export const CodeSnippet = (({ code, highlights }) => (
  <AceEditor
    mode="javascript"
    theme="github"
    className="snippet"
    name="code-snippet"
    highlightActiveLine={false}
    readOnly={true}
    markers={highlights.map(highlight)}
    editorProps={{$blockScrolling: true}}
    value={code}
    width=""
    height=""
  />
));
