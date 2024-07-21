// import { WebSocketServer } from "ws";
// import { WordMateGame } from "../WordmateAssets/word-mate";


// function wordMateGame(req: any, res: any) {
    
//     const game = new WordMateGame(req.body.player1, req.body.player2);
    
//     const wss = new WebSocketServer({ server });
//     wss.on("connection", (ws) => {
//         console.log("Client connected");
//         ws.on("close", () => {
//             console.log("Client disconnected");
//         });
//     })
//     res.send(wss);
// }   
// export default wordMateGame