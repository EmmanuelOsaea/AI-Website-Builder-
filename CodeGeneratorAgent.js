export default class CodeGeneratorAgent {
  generateHTML(requirements, design) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${this.escapeHTML(requirements.websiteType)} Website</title>
  <style>
    body {
      margin: 0;
      font-family: ${design.typography};
      background: ${design.colorPalette[0]};
      color: ${design.colorPalette[2]};
      line-height: 1.6;
    }
    header, section, footer {
      padding: 60px 20px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .hero {
      text-align: center;
      background: ${design.colorPalette[1]};
      border-radius: 16px;
      margin-top: 20px;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      background: ${design.colorPalette[2]};
      color: ${design.colorPalette[0]};
      text-decoration: none;
      border-radius: 8px;
      margin-top: 20px;
    }
    .card {
      background: ${design.colorPalette[1]};
      padding: 20px;
      border-radius: 12px;
      margin: 12px 0;
    }
  </style>
</head>
<body>
  <header>
    <h1>${this.escapeHTML(requirements.websiteType)}</h1>
  </header>

  <section class="hero">
    <h2>Welcome to your ${this.escapeHTML(requirements.websiteType)}</h2>
    <p>A ${requirements.tone} and ${requirements.style} experience for ${requirements.targetAudience}.</p>
    <a class="btn" href="#contact">Get Started</a>
  </section>

  <section id="about">
    <h2>About</h2>
    <p>This website was generated based on your requirements.</p>
  </section>

  ${design.sections.includes("gallery") ? `
  <section id="gallery">
    <h2>Gallery</h2>
    <div class="card">Gallery item 1</div>
    <div class="card">Gallery item 2</div>
  </section>` : ""}

  ${design.sections.includes("pricing") ? `
  <section id="pricing">
    <h2>Pricing</h2>
    <div class="card">Basic Plan</div>
    <div class="card">Pro Plan</div>
  </section>` : ""}

  ${design.sections.includes("testimonials") ? `
  <section id="testimonials">
    <h2>Testimonials</h2>
    <div class="card">"Great service!"</div>
  </section>` : ""}

  ${design.sections.includes("blog") ? `
  <section id="blog">
    <h2>Blog</h2>
    <div class="card">Latest post preview</div>
  </section>` : ""}

  ${design.sections.includes("contact") ? `
  <section id="contact">
    <h2>Contact</h2>
    <p>Email us at hello@example.com</p>
  </section>` : ""}

  <footer>
    <p>&copy; 2026 ${this.escapeHTML(requirements.websiteType)}. All rights reserved.</p>
  </footer>
</body>
</html>
    `;
  }

  escapeHTML(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
