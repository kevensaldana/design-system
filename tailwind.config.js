module.exports = {
  prefix: '',
  important: false,
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1250px",
      xl: "1530px",
    },
    fontFamily: {
      sans: ["Poppins", '"Helvetica Neue"'],
      serif: ["Georgia", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: "var(--primary-color)",
      accent: "var(--accent-color)",
      success: "var(--success-color)",
      danger: "var(--danger-color)",
      warning: "var(--warning-color)",
      info: "var(--info-color)",
      content:{
        'primary': 'var(--text-primary-color)',
        'secondary': 'var(--text-secondary-color)'
      },
      z: {
        0: 'var(--z0-color)',
        1: 'var(--z1-color)',
        2: 'var(--z2-color)',
        3: 'var(--z3-color)'
      },
    },
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' }
      }
    }
  },
  variants: {},
  plugins: []
}
