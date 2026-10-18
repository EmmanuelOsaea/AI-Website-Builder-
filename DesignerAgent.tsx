export default class DesignerAgent {
  createDesignPlan(requirements) {
    return {
      layout: this.pickLayout(requirements.websiteType),
      colorPalette: this.pickColors(requirements.style),
      typography: this.pickTypography(requirements.tone),
      sections: this.pickSections(requirements),
    };
  }

  pickLayout(websiteType) {
    switch (websiteType) {
      case "portfolio":
        return "hero + about + projects + contact";
      case "ecommerce":
        return "hero + products + benefits + testimonials + footer";
      case "blog":
        return "hero + featured posts + categories + newsletter";
      case "landing page":
        return "hero + features + call to action + testimonials";
      case "business":
        return "hero + services + about + contact";
      default:
        return "hero + content sections + footer";
    }
  }

  pickColors(style) {
    switch (style) {
      case "dark":
        return ["#111827", "#1f2937", "#f9fafb"];
      case "light":
        return ["#ffffff", "#f3f4f6", "#111827"];
      case "colorful":
        return ["#6366f1", "#ec4899", "#f59e0b"];
      case "minimal":
        return ["#ffffff", "#e5e7eb", "#374151"];
      default:
        return ["#0f172a", "#38bdf8", "#e2e8f0"];
    }
  }

  pickTypography(tone) {
    if (tone === "professional") return "Inter, sans-serif";
    if (tone === "fun") return "Poppins, sans-serif";
    if (tone === "modern") return "Roboto, sans-serif";
    if (tone === "minimal") return "Helvetica, sans-serif";
    return "Arial, sans-serif";
  }

  pickSections(requirements) {
    const sections = ["hero", "about"];

    if (requirements.features.includes("image gallery")) sections.push("gallery");
    if (requirements.features.includes("pricing section")) sections.push("pricing");
    if (requirements.features.includes("testimonials section")) sections.push("testimonials");
    if (requirements.features.includes("blog section")) sections.push("blog");
    if (requirements.features.includes("contact form")) sections.push("contact");

    sections.push("footer");
    return sections;
  }
}
