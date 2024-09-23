/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'move-text': 'move 15s linear infinite',
      },
      fontFamily: {
        caskadia: ['Caskadia Cove', 'monospace'],
        satoshi: ['Satoshi', 'monospace'],
        agentOrange: ['AgentOrange', 'ßmonospace']
      },
    },
  },
  plugins: [],
}

