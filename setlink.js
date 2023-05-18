// const fs = require("fs");
// const readline = require("readline");
const  fs  = require("fs");
const  readline  = require("readline");

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInput.question("link.js", (value) => {
  console.log(value);

  //
  fs.writeFile(
    "lnk.js",
    `const offerLink = "${value}";`,
    function (err) {
      console.log("Link set seccussful.");
      process.exit();
    }
  );
});
