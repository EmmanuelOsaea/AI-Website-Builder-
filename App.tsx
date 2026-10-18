import React, { useState } from "react";
import RequirementGatherer from "./RequirementGatherer";
import DesignerAgent from "./DesignerAgent";
import CodeGeneratorAgent from "./CodeGeneratorAgent";
import CopywriterAgent from "./CopywriterAgent";
import TesterAgent from "./TesterAgent";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  const handleGenerate = () => {
    const gatherer = new RequirementGatherer();
    const designer = new DesignerAgent();
    const codeGen = new CodeGeneratorAgent();
    const copywriter = new CopywriterAgent();
    const tester = new TesterAgent();

    const requirements = gatherer.gather(input);
    const design = designer.createDesignPlan(requirements);
    const copy = copywriter.generateCopy(requirements);
    const html = codeGen.generateHTML(requirements, design);
    const testResult = tester.testHTML(html);

    setOutput({
      requirements,
      design,
      copy,
      html,
      testResult,
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>AI Website Builder</h1>
      <textarea
        rows="6"
        style={{ width: "100%", marginBottom: "12px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe the website you want..."
      />
      <button onClick={handleGenerate}>Generate</button>

      {output && (
        <div style={{ marginTop: "20px" }}>
          <h2>Copy</h2>
          <p><strong>Headline:</strong> {output.copy.headline}</p>
          <p><strong>Subheadline:</strong> {output.copy.subheadline}</p>
          <p><strong>CTA:</strong> {output.copy.cta}</p>

          <h2>Test Result</h2>
          <p>{output.testResult.passed ? "Passed" : "Failed"}</p>
          {output.testResult.issues.length > 0 && (
            <ul>
              {output.testResult.issues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          )}

          <h2>Generated HTML</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>{output.html}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
