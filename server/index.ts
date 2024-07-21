import { WebSocketServer } from "ws";
import app from "./app.ts";
import dotenv from "dotenv";
import { WordMateGame } from "./WordmateAssets/word-mate.ts";

dotenv.config({
    path: "./.env"
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`);
})

const game = new WordMateGame("p1", "p2");
game.makeMove("p1", "e10");
game.makeMove("p2", "a21");
game.makeMove("p1", "t32");
game.makeMove("p2", "e43");
game.makeMove("p1", "n54");

// console.log(game.getTurn());
console.log(game.getBoard());
console.log(game)

// const wss = new WebSocketServer({ server });

// wss.on("connection", (ws) => {
//     console.log("Client connected");
//     ws.on("close", () => {
//         console.log("Client disconnected");
//     });
// })