module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        dracula_yellow: '#f1fa8c',
        dracula_red: '#ff5555',
        dracula_purple: '#bd93f9',
        dracula_pink: '#ff79c6',
        dracula_green: '#50fa7b',
        dracula_cyan: '#8be9fd',
        dracula_comment: '#6272a4',
        dracula_foreground: '#f8f8f2',
        dracula_currentline: '#44475a',
        dracula_background: '#282a36'
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
