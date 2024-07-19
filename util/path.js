const path = require ('path');

module.exports = path.dirname(require.main.filename); 
// This will give the path of the main module file. In this case, it will give the path of app.js file.