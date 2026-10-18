export default class RequirementGatherer {
  gather(input) {
    if (!input || typeof input !== "string") {
      throw new Error("Requirement input must be a string.");
    }

    const lower = input.toLowerCase();

    return {
      rawInput: input,
      websiteType: this.detectWebsiteType(lower),
      tone: this.detectTone(lower),
      features: this.detectFeatures(lower),
      style: this.detectStyle(lower),
      targetAudience: this.detectAudience(lower),
    };
  }

  detectWebsiteType(text) {
    if (text.includes("portfolio")) return "portfolio";
    if (text.includes("ecommerce") || text.includes("shop") || text.includes("store")) return "ecommerce";
    if (text.includes("blog")) return "blog";
    if (text.includes("landing page")) return "landing page";
    if (text.includes("business")) return "business";
    return "general website";
  }

  detectTone(text) {
    if (text.includes("professional")) return "professional";
    if (text.includes("fun")) return "fun";
    if (text.includes("modern")) return "modern";
    if (text.includes("minimal")) return "minimal";
    return "clean";
  }

  detectFeatures(text) {
    const features = [];

    if (text.includes("contact")) features.push("contact form");
    if (text.includes("gallery")) features.push("image gallery");
    if (text.includes("testimonials")) features.push("testimonials section");
    if (text.includes("pricing")) features.push("pricing section");
    if (text.includes("blog")) features.push("blog section");
    if (text.includes("login")) features.push("login system");
    if (text.includes("chat")) features.push("chat support");

    return features;
  }

  detectStyle(text) {
    if (text.includes("dark")) return "dark";
    if (text.includes("light")) return "light";
    if (text.includes("colorful")) return "colorful";
    if (text.includes("minimal")) return "minimal";
    return "neutral";
  }

  detectAudience(text) {
    if (text.includes("students")) return "students";
    if (text.includes("business owners")) return "business owners";
    if (text.includes("developers")) return "developers";
    if (text.includes("customers")) return "customers";
    return "general audience";
  }
}
