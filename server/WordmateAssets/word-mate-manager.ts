import { WordMateGame } from "./word-mate";

export class WordMateManager{
    private waitingPlayers: any[] = [];
    private games: WordMateGame[] = [];
    public addPlayer(player: any){
        this.waitingPlayers.push(player);
        if (this.waitingPlayers.length === 2){
            const newGame = new WordMateGame(this.waitingPlayers[0], this.waitingPlayers[1]);
            this.games.push(newGame);
            this.games;
            this.waitingPlayers = [];
        }
    }
    public getGames(){
        return this.games;
    }
    public getWaitingPlayers(){
        return this.waitingPlayers;
    }
    public removePlayer(player:any){
        const index = this.waitingPlayers.indexOf(player);
        if (index > -1) {
            this.waitingPlayers.splice(index, 1);
        }
    }
    public removeGame(game: WordMateGame){
        const index = this.games.indexOf(game);
        if (index > -1) {
            this.games.splice(index, 1);
        }
    }
    public makeMove(player: any, move: string){
        const game = this.games.find(g => g.player1 === player || g.player2 === player);
        if (game){
            game.makeMove(move);
        }
    }
}