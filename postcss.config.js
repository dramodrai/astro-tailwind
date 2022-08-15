const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

module.exports = {
  plugins: [
    postcssJitProps(OpenProps),
    require(tailwindcss), require(autoprefixer),
  
  ]
}