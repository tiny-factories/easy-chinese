// this is the data for hodling which page we're on
let pageNumber = 0;
let dataNumber = 0;

// 1. initialize array of data. Since no data has been loaded, it's just an empty array.
const received = [];

// 2. fetching the json data
fetch("/json/hsk1.json")
  .then(function(received) {
    return received.json();
    // If the request from point #2 goes through, look through the newly received
    for (let incomin_data of data) {
      for (let received_data of received) {
        // do your comparisons of stuff here....
      }
    }
  })

  // 3. add data to the array received
  .then(function(data) {
    received.push(...data);
    // console.log(received);
  });

//pick the relevant tags
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const pagenumTag = document.querySelector("div.pagenum");
const randomTag = document.querySelector("footer img.random");
const pinyinTag = document.querySelector(".pinyin");
const chineseTag = document.querySelector("h2");
const englishTag = document.querySelector("h3");
// const circleTag = document.querySelector("section div.circle")
// const bodyTag = document.querySelector("body")

//make a next function to to increase the pageNumber
const next = function() {
  pageNumber = pageNumber + 1;
  if (pageNumber > received.length - 1) {
    pageNumber = 0;
  }
  updateSection();
};

// make a previous funtion to decrease the pageNumber
const previous = function() {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = received.length - 1;
  }
  updateSection();
};

// pick a random slide
const random = function() {
  pageNumber = Math.floor(Math.random() * received.length);
  updateSection();
};

// this will update the section's content and style
const updateSection = function() {
  pagenumTag.innerHTML = pageNumber + "/" + (received.length - 1);
  chineseTag.innerHTML = received[pageNumber].Chinese;
  pinyinTag.innerHTML = received[pageNumber].Pinyin;
  englishTag.innerHTML = received[pageNumber].English;
  // bodyTag.style.backgroundColor = received[pageNumber].background
  // circleTag.style.backgroundColor = received[pageNumber].circle
};

// on click of nextTag, run this
nextTag.addEventListener("click", function() {
  next();
});

// on click of previousTag, run this
previousTag.addEventListener("click", function() {
  previous();
});

// on click of randomTag, run this
randomTag.addEventListener("click", function() {
  random();
});

// when a user presses a key, check for arrow left or right
// and do next or prev correctly
document.addEventListener("keyup", function(event) {
  // console.log(event);
  if (event.key == "ArrowRight") {
    next();
  }

  if (event.key == "ArrowLeft") {
    previous();
  }

  if (event.key == " ") {
    random();
  }
});
