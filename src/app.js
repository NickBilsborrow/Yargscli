const yargs = require("yargs");
const command = process.argv[2];

const fs = require("fs");
const { add, remove, read, update } = require("./utils/index.js");

let movieList;

try {
  let tempJson = fs.readFileSync("./netflix.json");
  let tempNetflix = JSON.parse(tempJson);
  movieList = tempNetflix;
} catch (error) {
  movieList = [];
}

const app = () => {
  if (command === "add") {
    add(movieList, yargs.argv.title, yargs.argv.rating);
  } else if (command === "remove") {
    remove(movieList, yargs.argv.title);
  } else if (command === "update") {
    update(
      movieList,
      yargs.argv.title,
      yargs.argv.newTitle,
      yargs.argv.newRating
    );
  } else if (command === "read") {
    read(movieList);
  }
};

app();
