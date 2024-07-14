import { WebSocketServer } from "ws";
import { WordMateGame } from "../games/word-mate";
import server from "..";

function wordMateGame(req: any, res: any) {
    
    const game = new WordMateGame(req.body.player1, req.body.player2);
    
    const wss = new WebSocketServer({ server });
    res.send(wss);
}   
export default wordMateGame