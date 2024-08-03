import { WebSocketServer } from "ws";
import app from "./app.ts";
import dotenv from "dotenv";
import { WordMateGame } from "./WordmateAssets/word-mate.ts";
import { WordMateManager } from "./WordmateAssets/word-mate-manager.ts";

dotenv.config({
    path: "./.env"
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`);
})



const wss = new WebSocketServer({ server });
const gameManager = new WordMateManager();

wss.on("connection", (ws) => {
    console.log("Client connected");
    gameManager.addPlayer(ws);
    ws.on("message", (message) => {
        gameManager.makeMove(ws,message.toString());
    })
    ws.on("close", () => {
        console.log("Client disconnected");
    });
})