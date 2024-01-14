let fs = require('fs')

// Get configure file
function getConfigure() {
     //Read configure file
     let configure = fs.readFileSync(__dirname + "/../config/configure.json", { encoding: "utf8", flag: "r" })
     let configureParse = JSON.parse(configure)
     return configureParse
}

module.exports = getConfigure