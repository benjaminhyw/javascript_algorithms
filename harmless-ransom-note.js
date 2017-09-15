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