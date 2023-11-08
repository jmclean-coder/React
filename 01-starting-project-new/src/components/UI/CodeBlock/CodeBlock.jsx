import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CodeBlock({ theme, code }) {

  return (
    <SyntaxHighlighter language="jsx" style={theme} showLineNumbers>
      {code.trim()}
    </SyntaxHighlighter>
  );
}
