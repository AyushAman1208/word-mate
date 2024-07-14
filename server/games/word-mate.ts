export class WordMateGame {
    private player1: string;
    private player2: string;
    private moves: string[] = [];
    private scoreplayer1 = 0;
    private scoreplayer2 = 0;
    private pointSeqPlayer1: number[] = [];
    private pointSeqPlayer2: number[] = [];
    private turn: number = 1;
    private end: boolean = false;
    private wordsUsed: string[] = [];
    private board: string[][] = [
        ["", "", "", "", "","","",""],
        ["", "", "", "", "","","",""],
        ["", "", "", "", "","","",""],
        ["", "", "", "", "","","",""],
        ["", "", "", "", "","","",""],
        ["", "", "", "", "","","",""],
        ["", "", "", "", "","","",""],
        ["", "", "", "", "","","",""],
    ]

    constructor(player1: string, player2: string) {
        this.player1 = player1;
        this.player2 = player2;
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
            
        }
        else if (player === this.player2) {
            this.turn = 1;
        }
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
}