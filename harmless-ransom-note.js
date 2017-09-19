// Harmless Ransom Note

/* Rules:
  Takes two parameters
    First will be the note we want to write as a string.
    The second will be the magazine text we have available to make the note out of as a string
  The purpose of the algorithm is to see if we have enough words in the magazine text to write our note
    If yes, return true
    If no, return false

  NOTE: If one word is used 2 (or more) times in the note, but only seen once (or less) in magazine text then it fails.
*/

/* PSEUDOCODE

  1) Turn the note into an array of words
  2) Turn the mag into an array of words
  3) Organize each new array alphabetically
  4) Look at the first letter of each word in note array, and insert that letter into a reference array
  5) compare the reference array with each first letter of each word in mag array.
    IF word starts with any letter inside note array, keep the word
    ELSE remove the word
  6) Compare the actual words!
    IF there is a match, cool.  Make note of that and move on to the next word
    ELSE IF there isn't a match, then that's enough already for you to return FALSE
*/

function harmlessNote(note, mag){
  var noteArr = note.split("");
  var magArr = mag.split("");
  var noteMagArr = [];

  for (var i=0; i < note.length; i++){
    if (!(magArr.includes(noteArr[i]))) {
      return false;
    }
    else if (magArr.includes(noteArr[i])) {
      noteMagArr.push(noteArr[i]);
      magArr.splice(magArr.indexOf(noteArr[i]), 1)
    }
    return true;
  }
}