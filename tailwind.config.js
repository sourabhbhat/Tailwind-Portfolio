module.exports = {
  darkMode:"class",
  content: ['./*.html'],
  theme: {
    extend: {
      spacing:{
        "big":"48rem"
      }
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    width: {
      '20': '20px',
      '30':'30px',
     },
    fontFamily:{
      mainfont:['Neue Haas Grotesk Text Pro', 'sans-serif'],
      applefont:['SF Pro Display', 'sans-serif']
    }
  },
  plugins: [],
}
