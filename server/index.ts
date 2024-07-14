import { WebSocketServer } from "ws";
import app from "./app.ts";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`);
})

export default server;

// const wss = new WebSocketServer({ server });

// wss.on("connection", (ws) => {
//     console.log("Client connected");
//     ws.on("close", () => {
//         console.log("Client disconnected");
//     });
// })