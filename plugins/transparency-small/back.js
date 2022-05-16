const path = require("path");
const { injectCSS } = require("../utils");

// back.js
module.exports = win => {
	injectCSS(win.webContents, path.join(__dirname, "style.css"));
};