export default class CopywriterAgent {
  generateCopy(requirements) {
    return {
      headline: this.createHeadline(requirements),
      subheadline: this.createSubheadline(requirements),
      cta: this.createCTA(requirements),
    };
  }

  createHeadline(requirements) {
    return `Build a ${requirements.tone} ${requirements.websiteType} that stands out`;
  }

  createSubheadline(requirements) {
    return `Designed for ${requirements.targetAudience} with a ${requirements.style} look and feel.`;
  }

  createCTA(requirements) {
    if (requirements.websiteType === "ecommerce") return "Shop Now";
    if (requirements.websiteType === "portfolio") return "View My Work";
    if (requirements.websiteType === "blog") return "Read More";
    return "Get Started";
  }
}
