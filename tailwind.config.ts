import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial MPX — extraída da logo. Não invente cores novas.
        navy: {
          900: "#00112B", // fundo mais profundo
          800: "#011D48", // azul-marinho oficial (cor primária)
          600: "#0A2E6B", // variação para hovers/detalhes
        },
        mist: "#C7D0E0", // cinza-azulado para textos secundários
      },
      fontFamily: {
        // Ligadas às variáveis CSS definidas em app/layout.tsx
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
