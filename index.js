require.extensions[".web.js"] = function(module, filename) {
   module._compile(module, filename);
}

var Button = require("./Button");

Button();
