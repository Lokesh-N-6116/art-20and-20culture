import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      'josefin': ['Josefin Sans', 'sans-serif'],
      'samarkan': ['Samarkan', 'serif'],
      'sans': ['Josefin Sans', 'system-ui', 'sans-serif'],
    },
    extend: {
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // SP Collections luxury theme
        luxury: {
          purple: {
            50: "hsl(var(--luxury-purple-50))",
            100: "hsl(var(--luxury-purple-100))",
            200: "hsl(var(--luxury-purple-200))",
            300: "hsl(var(--luxury-purple-300))",
            400: "hsl(var(--luxury-purple-400))",
            500: "hsl(var(--luxury-purple-500))",
            600: "hsl(var(--luxury-purple-600))",
            700: "hsl(var(--luxury-purple-700))",
            800: "hsl(var(--luxury-purple-800))",
            900: "hsl(var(--luxury-purple-900))",
          },
          gold: {
            50: "hsl(var(--luxury-gold-50))",
            100: "hsl(var(--luxury-gold-100))",
            200: "hsl(var(--luxury-gold-200))",
            300: "hsl(var(--luxury-gold-300))",
            400: "hsl(var(--luxury-gold-400))",
            500: "hsl(var(--luxury-gold-500))",
            600: "hsl(var(--luxury-gold-600))",
            700: "hsl(var(--luxury-gold-700))",
            800: "hsl(var(--luxury-gold-800))",
            900: "hsl(var(--luxury-gold-900))",
          },
          silver: {
            50: "hsl(var(--luxury-silver-50))",
            100: "hsl(var(--luxury-silver-100))",
            200: "hsl(var(--luxury-silver-200))",
            300: "hsl(var(--luxury-silver-300))",
            400: "hsl(var(--luxury-silver-400))",
            500: "hsl(var(--luxury-silver-500))",
            600: "hsl(var(--luxury-silver-600))",
            700: "hsl(var(--luxury-silver-700))",
            800: "hsl(var(--luxury-silver-800))",
            900: "hsl(var(--luxury-silver-900))",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
