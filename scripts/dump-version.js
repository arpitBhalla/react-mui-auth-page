const package = require("../package.json");
const fs = require("fs");
const myArgs = process.argv.slice(2)[0];

if (!myArgs) process.exit();

package.version = myArgs;

fs.writeFile("package.json", JSON.stringify(package, null, 2), (err) => {
  if (err) {
    throw Error("Unable to update Version");
  }
});
