const { exec } = require("child_process");

exec(
  "sass ./public/scss/index.scss ./public/css/index.css",
  (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(stdout);
  }
);
