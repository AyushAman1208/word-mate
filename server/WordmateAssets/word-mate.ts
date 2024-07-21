// @ts-ignore
import checkWord from "check-word";
import { reverseString } from "../utils/helpers";
const checkwords = checkWord("en");
export class WordMateGame {
  private player1: string;
  private player2: string;
  private moves: string[] = [];
  private scoreplayer1 = 0;
  private scoreplayer2 = 0;
  private pointSeqPlayer1: number[] = [];
  private wordsUserPlayer1: string[] = [];
  private wordsUserPlayer2: string[] = [];
  private pointSeqPlayer2: number[] = [];
  private turn: number = 1;
  private end: boolean = false;
  private wordsUsed: string[] = [];
  private board: string[][] = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
  ];

  constructor(player1: string, player2: string) {
    this.player1 = player1;
    this.player2 = player2;
    console.log(checkwords.check("live"));
  }

  public getTurn(): number {
    return this.turn;
  }

  public isGameOver(): boolean {
    return this.end;
  }



  public makeMove(player: string, move: string) {
    this.board[parseInt(move[1])][parseInt(move[2])] = move[0];
    this.moves.push(move);
    if (player === this.player1) {
      this.turn = 2;
    } else if (player === this.player2) {
      this.turn = 1;
    }
    this.scoringMechanism(move);
  }
  public getScore(player: string): number {
    if (player === this.player1) {
      return this.scoreplayer1;
    }
    return this.scoreplayer2;
  }
  public getBoard(): string[][] {
    return this.board;
  }

    private handleScoreUpdate(word: string){
    if (this.turn === 1) {
      this.wordsUserPlayer1.push(word);
      this.pointSeqPlayer1.push(word.length);
      this.scoreplayer1 += word.length;
    } else {
      this.wordsUserPlayer2.push(word);
      this.pointSeqPlayer2.push(word.length);
      this.scoreplayer2 += word.length;
    }
    this.wordsUsed.push(word);
  }
  private scoringMechanism(move: string) {
    const row = parseInt(move[1]);
    const col = parseInt(move[2]);

    // horizontal
    for (let i = 0; i <= col; i++) {
      let currStr = "";
      for (let k = i; k <= col; k++) {
        currStr += this.board[row][k];
      }
      if (this.isWord(currStr) && this.wordsUsed.includes(currStr) === false) {
        this.handleScoreUpdate(currStr);
      }
      if(this.isWord(reverseString(currStr)) && this.wordsUsed.includes(reverseString(currStr)) === false){
        this.handleScoreUpdate(reverseString(currStr));
      }
      for (let j = col+1; j < 8; j++) {
        currStr += this.board[row][j];
        if (this.isWord(currStr) && this.wordsUsed.includes(currStr) === false) {
          this.handleScoreUpdate(currStr);
        }
        if(this.isWord(reverseString(currStr)) && this.wordsUsed.includes(reverseString(currStr)) === false){
          this.handleScoreUpdate(reverseString(currStr));
        }
      }
    }

    //verticle
    for (let i = 0; i <= row; i++) {
      let currStr = "";
      for (let k = i; k <= row; k++) {
        currStr += this.board[k][col];
      }
      if (this.isWord(currStr) && this.wordsUsed.includes(currStr) === false) {
        this.handleScoreUpdate(currStr);
      }
      if(this.isWord(reverseString(currStr)) && this.wordsUsed.includes(reverseString(currStr)) === false){
        this.handleScoreUpdate(reverseString(currStr));
      }
      for (let j = row+1; j < 8; j++) {
        currStr += this.board[j][col];
        if (this.isWord(currStr) && this.wordsUsed.includes(currStr) === false) {
          this.handleScoreUpdate(currStr);
        }
        if(this.isWord(reverseString(currStr)) && this.wordsUsed.includes(reverseString(currStr)) === false){
          this.handleScoreUpdate(reverseString(currStr));
        }
      }
    }

    //diagonal
    //to be added later
  }
  public isWord(word: string) {
    return checkwords.check(word);
  }
}
