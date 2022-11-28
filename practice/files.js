// fs module

const fs = require("fs/promises");
// asynchronous

// // rename file
// fs.rename("file/test.js", "file/test2.json", (err) => {
//   if (err) {
//     return console.error(err);
//   }
// });

//console.log("are you done?");

// synchronous
// try {
//   fs.renameSync("file/test.js", "file/test2.js");
// } catch (err) {
//   console.error(err);
// }

// console.log("are you done?");

// use promise based api
async function testReadFile(content) {
  const fileName = "file/test2.js";
  try {
    const data = await fs.readFile(fileName, "utf8");
    await fs.writeFile(fileName, content);
    console.log("finished writing content");
    const newData = await fs.readFile(fileName, "utf8");
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}

const content = "some file content";
testReadFile(content);
