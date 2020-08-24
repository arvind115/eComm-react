// Use CommonJS require below so we can dynamically import during build-time.
if (process.env.NODE_ENV === "production") {
  module.exports = require("./storeProd");
} else {
  module.exports = require("./storeDev");
}
