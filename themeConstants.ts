// themeConstants.ts

export interface ColorRole {
  light: string;
  dark: string;
}

export interface ThemePalette {
  id: string;
  name: string;
  bgPage: ColorRole;
  bgSurface: ColorRole;
  borderSubtle: ColorRole;
  textPrimary: ColorRole;
  textSecondary: ColorRole;
  brandPrimary: ColorRole;
  brandSecondary: ColorRole;
  success: ColorRole;
}

export const THEME_PALETTES: Record<string, ThemePalette> = {
  // 🍗 The Fried Chicken Palette 
  crispyChicken: {
    id: "crispy-chicken",
    name: "Crispy Chicken & Honey",
    bgPage: {
      light: "oklch(0.98 0.01 79.8)",     // Buttermilk Cream (#FDF8F0)
      dark: "oklch(0.28 0.07 49.8)",      // Charred Pepper (#421D05)
    },
    bgSurface: {
      light: "oklch(0.80 0.10 64.9)",     // Caramel Ice Cream (#ECAF73)
      dark: "oklch(0.38 0.14 43.1)",      // Dark Crispy Brown (#813B10)
    },
    borderSubtle: {
      light: "oklch(0.85 0.00 0.0)",      // Light Ash (#D2D2D2)
      dark: "oklch(0.77 0.01 154.9)",     // Ash Gray (#B2BEB5)
    },
    textPrimary: {
      light: "oklch(0.29 0.14 36.3)",     // Deep Mahogany Crust (#721B07)
      dark: "oklch(0.98 0.01 79.8)",      // Buttermilk Cream
    },
    textSecondary: {
      light: "oklch(0.38 0.14 43.1)",     // Dark Crispy Brown (#813B10)
      dark: "oklch(0.75 0.13 80.0)",      // Crispy Chicken Skin (Light)
    },
    brandPrimary: {
      light: "oklch(0.46 0.17 41.8)",     // Vivid Fried Brown (#A84B1E)
      dark: "oklch(0.64 0.17 62.4)",      // Golden Fried Brown (#D68220)
    },
    brandSecondary: {
      light: "oklch(0.69 0.16 54.6)",     // Spicy Honey Glaze (#E57C23)
      dark: "oklch(0.81 0.15 73.5)",      // Smooth Orange-Gold (#F9B042)
    },
    success: {
      light: "oklch(0.57 0.16 138.8)",    // Forest Green (#228B22)
      dark: "oklch(0.76 0.22 136.0)",     // Lime Green (#32CD32)
    }
  },

  // 🌿 Alternative corporate/natural theme using your Green tokens
  emeraldForest: {
    id: "emerald-forest",
    name: "Emerald Forest",
    bgPage: {
      light: "oklch(0.99 0.01 142.1)",    // Honeydew (#F0FFF0)
      dark: "oklch(0.38 0.12 142.1)",     // Dark Green (#006400)
    },
    bgSurface: {
      light: "oklch(0.93 0.14 142.1)",    // Mint Green (#98FF98)
      dark: "oklch(0.42 0.06 142.7)",     // Hunter Green (#355E3B)
    },
    borderSubtle: {
      light: "oklch(0.85 0.00 0.0)",      // Light Ash
      dark: "oklch(0.77 0.01 154.9)",     // Ash Gray
    },
    textPrimary: {
      light: "oklch(0.38 0.12 142.1)",    // Dark Green
      dark: "oklch(0.99 0.01 142.1)",     // Honeydew
    },
    textSecondary: {
      light: "oklch(0.42 0.06 142.7)",    // Hunter Green
      dark: "oklch(0.88 0.14 137.9)",     // Light Green (#90EE90)
    },
    brandPrimary: {
      light: "oklch(0.57 0.16 138.8)",    // Forest Green (#228B22)
      dark: "oklch(0.74 0.18 152.0)",     // Emerald Green (#50C878)
    },
    brandSecondary: {
      light: "oklch(0.54 0.11 154.4)",    // Sea Green (#2E8B57)
      dark: "oklch(0.76 0.22 136.0)",     // Lime Green (#32CD32)
    },
    success: {
      light: "oklch(0.47 0.14 142.1)",    // Pure Green
      dark: "oklch(0.87 0.31 142.1)",     // Bright Neon Green
    }
  }
};
