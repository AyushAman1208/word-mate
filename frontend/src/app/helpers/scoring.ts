let words = new Map<string, number>();
words.set("AT", 1);
words.set("TEA", 1);
words.set("TEN", 1);
words.set("NET", 1);
words.set("TENT", 1);

export const scoringMechanism = (
  dataTable: string[][],
  rowInd: number,
  colInd: number
) => {
  console.log(rowInd, colInd);
  let points: number = 0;
  let wordsFormed: Array<string> = [];


//Devising scoring mechanism only for the words starting and ending from the entered letter.
  //going left
  let col = colInd;
  let currWord: string = "";

  while (col >= 0 && dataTable[rowInd][col].length !== 0) {
    currWord += dataTable[rowInd][col];
    words.has(currWord) ? wordsFormed.push(currWord) : wordsFormed.push();
    words.has(currWord.split("").reverse().join(""))
      ? wordsFormed.push(currWord.split("").reverse().join(""))
      : wordsFormed.push();
    col--;
  }

  //going right
  currWord = "";
  col = colInd;
  while (col <= 7 && dataTable[rowInd][col].length !== 0) {
    currWord += dataTable[rowInd][col];

    words.has(currWord) ? wordsFormed.push(currWord) : wordsFormed.push();
    words.has(currWord.split("").reverse().join(""))
      ? wordsFormed.push(currWord.split("").reverse().join(""))
      : wordsFormed.push();
    col++;
  }
  //going down
  currWord = "";
  let row = rowInd;
  while (row <= 7 && dataTable[row][colInd].length !== 0) {
    currWord += dataTable[row][colInd];

    words.has(currWord) ? wordsFormed.push(currWord) : wordsFormed.push();
    words.has(currWord.split("").reverse().join(""))
      ? wordsFormed.push(currWord.split("").reverse().join(""))
      : wordsFormed.push();
    row++;
  }

  //going up
  currWord = "";
  row = rowInd;
  while (row >= 0 && dataTable[row][colInd].length !== 0) {
    currWord += dataTable[row][colInd];
    words.has(currWord) ? wordsFormed.push(currWord) : wordsFormed.push();
    words.has(currWord.split("").reverse().join(""))
      ? wordsFormed.push(currWord.split("").reverse().join(""))
      : wordsFormed.push();
    row--;
  }





  console.log(wordsFormed);

  return wordsFormed.toString();
};
