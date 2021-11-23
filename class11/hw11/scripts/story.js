var questions = 9;
var questionsLeft = " [" + questions + " questions left]";

var one = prompt("Please type an noun" + questionsLeft);
questions -= 1;
questionsLeft = " [" + questions + " questions left]";

var two = prompt("Please type an adjective " + questionsLeft);

questions -= 1;
questionsLeft = " [" + questions + " questions left]";

var three = prompt("Please type a noun" + questionsLeft);

questions -= 1;
questionsLeft = " [" + questions + " questions left]";

var four = prompt("Please enter a verb" + questionsLeft);

questions -= 1;
questionsLeft = " [" + questions + " questions left]";

var five = prompt("Please enter a place" + questionsLeft);

questions -= 1;
questionsLeft = " [" + questions + " questions left]";

var six = prompt("Please enter a skill" + questionsLeft);

questions -= 1;
questionsLeft = " [" + questions + " questions left]";

var seven = prompt("Please enter an Artist name" + questionsLeft);

questions -= 1;
questionsLeft = " [" + questions + " questions left]";

var eight = prompt(
  "Please enter a verb in the past (ex: jumped)" + questionsLeft
);

questions -= 1;
questionsLeft = " [" + questions + " questions left]";

var nine = prompt("Please enter a place" + questionsLeft);

alert("All done. Ready for the message?");

var sentence =
  "There once was a " + one + " who dreamed of being " + two + ". ";
sentence +=
  " One day, the " +
  one +
  " met a " +
  three +
  ". " +
  "The " +
  three +
  " taught the " +
  one +
  " how to " +
  four +
  ". ";
sentence +=
  "After the " +
  one +
  " learned to " +
  four +
  ", they spent the rest of the day together and had a lot of fun. ";

sentence +=
  "The next day, they went on to " +
  five +
  " and took a class to learn " +
  six +
  ". ";

sentence +=
  "Later that they, they went to " +
  seven +
  "'s concert and had a lot of fun. They " +
  eight +
  " all night. ";

sentence +=
  "After having so much fun, they went to " +
  nine +
  " and became best friends. The end.";

document.write(sentence);
