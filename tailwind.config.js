module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "stickerapp-com-noto-sans-black":
          "var(--stickerapp-com-noto-sans-black-font-family)",
        "stickerapp-com-noto-sans-bold":
          "var(--stickerapp-com-noto-sans-bold-font-family)",
        "stickerapp-com-noto-sans-display-extrabold":
          "var(--stickerapp-com-noto-sans-display-extrabold-font-family)",
        "stickerapp-com-noto-sans-display-regular":
          "var(--stickerapp-com-noto-sans-display-regular-font-family)",
        "stickerapp-com-semantic-button":
          "var(--stickerapp-com-semantic-button-font-family)",
        "stickerapp-com-semantic-heading-1":
          "var(--stickerapp-com-semantic-heading-1-font-family)",
        "stickerapp-com-semantic-heading-2":
          "var(--stickerapp-com-semantic-heading-2-font-family)",
        "stickerapp-com-semantic-heading-3":
          "var(--stickerapp-com-semantic-heading-3-font-family)",
        "stickerapp-com-semantic-heading-4":
          "var(--stickerapp-com-semantic-heading-4-font-family)",
        "stickerapp-com-semantic-input":
          "var(--stickerapp-com-semantic-input-font-family)",
        "stickerapp-com-semantic-item":
          "var(--stickerapp-com-semantic-item-font-family)",
        "stickerapp-com-semantic-label":
          "var(--stickerapp-com-semantic-label-font-family)",
        "stickerapp-com-semantic-link":
          "var(--stickerapp-com-semantic-link-font-family)",
        "stickerapp-com-semantic-options":
          "var(--stickerapp-com-semantic-options-font-family)",
        "stickerapp-com-semantic-strong":
          "var(--stickerapp-com-semantic-strong-font-family)",
        "www-stickerjunkie-com-inter-bold":
          "var(--www-stickerjunkie-com-inter-bold-font-family)",
        "www-stickerjunkie-com-inter-regular":
          "var(--www-stickerjunkie-com-inter-regular-font-family)",
        "www-stickerjunkie-com-inter-regular-underline":
          "var(--www-stickerjunkie-com-inter-regular-underline-font-family)",
        "www-stickerjunkie-com-inter-semi-bold":
          "var(--www-stickerjunkie-com-inter-semi-bold-font-family)",
        "www-stickerjunkie-com-semantic-button":
          "var(--www-stickerjunkie-com-semantic-button-font-family)",
        "www-stickerjunkie-com-semantic-emphasis":
          "var(--www-stickerjunkie-com-semantic-emphasis-font-family)",
        "www-stickerjunkie-com-semantic-heading-1":
          "var(--www-stickerjunkie-com-semantic-heading-1-font-family)",
        "www-stickerjunkie-com-semantic-heading-2":
          "var(--www-stickerjunkie-com-semantic-heading-2-font-family)",
        "www-stickerjunkie-com-semantic-heading-3":
          "var(--www-stickerjunkie-com-semantic-heading-3-font-family)",
        "www-stickerjunkie-com-semantic-input":
          "var(--www-stickerjunkie-com-semantic-input-font-family)",
        "www-stickerjunkie-com-semantic-label":
          "var(--www-stickerjunkie-com-semantic-label-font-family)",
        "www-stickerjunkie-com-semantic-link":
          "var(--www-stickerjunkie-com-semantic-link-font-family)",
        "www-stickerjunkie-com-semantic-strong":
          "var(--www-stickerjunkie-com-semantic-strong-font-family)",
        "www-stickerjunkie-com-semantic-strong-underline":
          "var(--www-stickerjunkie-com-semantic-strong-underline-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
