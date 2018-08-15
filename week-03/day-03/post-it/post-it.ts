import { log } from "util";

'use strict';
export { };

// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

export class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;
}

const orangeIdea1Blue = new PostIt();
orangeIdea1Blue.backgroundColor = 'orange';
orangeIdea1Blue.text = 'Idea 1';
orangeIdea1Blue.textColor = "blue";
console.log(orangeIdea1Blue);

const pinkAwesomeBlack = new PostIt();
pinkAwesomeBlack.backgroundColor = 'pink';
pinkAwesomeBlack.text = 'Awesome';
pinkAwesomeBlack.textColor = 'black';
console.log(pinkAwesomeBlack);

const yellowSuperbGreen = new PostIt();
yellowSuperbGreen.backgroundColor = 'yellow';
yellowSuperbGreen.text = 'Superb!';
yellowSuperbGreen.textColor = 'green';
console.log(yellowSuperbGreen);