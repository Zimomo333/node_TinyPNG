const tinify = require("tinify");
tinify.key = "bFkmD8cZ1Sc0GLCYSXPh57xxvM6wq28j";
const fs = require('fs');
// fs.readdir('./icons/2', (err, files) => {
//   if (err) throw err;
//   files.forEach(file => {
//     const source = tinify.fromFile("./icons/2/"+file);
//     source.toFile("./icons/2_zip/"+file);
//   })
// });

let count = 0;
fs.readdir("./images/2", (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    fs.access("./images/2_zip/" + file, fs.constants.F_OK, (err) => {
      if(err) {
        try {
          let source = tinify.fromFile("./images/2/"+file);
          source.toFile("./images/2_zip/"+file);;
        } catch (err) {
          console.error(err);
        }
      }
    })
  })
});
