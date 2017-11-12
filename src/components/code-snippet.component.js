import React from 'react';
import { connect } from 'react-redux';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';
import AceEditor from 'react-ace';

import { combineSelectors } from '../store/utils';
import * as CodeSnippetSelectors from '../store/code-snippet/code-snippet.selectors';


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

export const CodeSnippet = connect(
  combineSelectors({
    snippet: CodeSnippetSelectors.snippet,
    highlights: CodeSnippetSelectors.highlights,
  })
)(({ highlights, snippet }) => (
  <AceEditor
    mode="javascript"
    theme="github"
    className="snippet"
    name="code-snippet"
    highlightActiveLine={false}
    readOnly={true}
    markers={highlights.map(highlight)}
    value={snippet}
    width=""
    height=""
  />
));
