export default class TesterAgent {
  testHTML(html) {
    const issues = [];

    if (!html.includes("<html")) issues.push("Missing <html> tag");
    if (!html.includes("<head>")) issues.push("Missing <head> tag");
    if (!html.includes("<body>")) issues.push("Missing <body> tag");
    if (!html.includes("<title>")) issues.push("Missing <title> tag");
    if (!html.includes("</html>")) issues.push("Missing closing </html> tag");

    return {
      passed: issues.length === 0,
      issues,
    };
  }
}
