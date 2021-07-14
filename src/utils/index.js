const fs = require("fs");
const { title } = require("process");

exports.add = (movieList, title, rating) => {
  if (title !== undefined) {
    if (rating === undefined) {
      rating = "unrated";
    }
    const result = movieList.find(({ Title }) => Title === title);
    let index = movieList.findIndex((element) => element === result);
    if (index === -1) {
      tempMovie = { Title: title, Rating: rating };
      console.log(tempMovie);
      movieList.push(tempMovie);
      let stringMovieList = JSON.stringify(movieList);

      fs.writeFileSync("./netflix.json", stringMovieList);
      console.log(`${title} has been added to the list`);
    } else {
      console.log(`${title} is already of the list`);
    }
  }
};

exports.remove = (movieList, imput1) => {
  const result = movieList.find(({ Title }) => Title === imput1);
  let index = movieList.findIndex((element) => element === result);
  if (index !== -1) {
    movieList.splice(index, 1);
    let stringMovieList = JSON.stringify(movieList);
    fs.writeFileSync("./netflix.json", stringMovieList);
    console.log(`${imput1} has been removed from the list`);
  } else {
    console.log("This movie is not on the list it can't be removed");
  }
};

exports.read = (movieList,input1,input2) => {
  if(input2 !== undefined){ } else if(input1 !== undefined){} else{

  console.log("The movie list consists of:");
  movieList.map((item) => {
    console.log(`${item.Title}:${item.Rating}`);
  });}
};

exports.update = (movieList, title, newTitle, newRating) => {
  const result1 = movieList.find(({ Title }) => Title === newTitle);
  let index1 = movieList.findIndex((element) => element === result1);
  if (index1 === -1) {
    const result2 = movieList.find(({ Title }) => Title === title);
    let index2 = movieList.findIndex((element) => element === result2);
    if (newTitle === undefined) {
      newTitle = result2.Title;
    }
    if (newRating === undefined) {
      newRating = result2.Rating;
    }
    tempMovie = { Title: newTitle, Rating: newRating };
    if (index2 !== -1) {
      movieList.splice(index2, 1, tempMovie);
      let stringMovieList = JSON.stringify(movieList);
      fs.writeFileSync("./netflix.json", stringMovieList);
      if (title !== newTitle) {
        console.log(`${title} has been changed to ${newTitle} `);
      }
      if (result2.Rating !== newRating) {
        console.log(
          `rating has been changed from ${result2.Rating} to ${newRating} `
        );
      }
    } else {
      console.log(`${title} is not in the list, it can't be updated.`);
    }
  } else {
    console.log(
      `${newTitle} is already in the list you can't change an item to this`
    );
  }
};
