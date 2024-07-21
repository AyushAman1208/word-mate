import express from "express";
import { WordMateGame } from "./WordmateAssets/word-mate";

const app = express();

// const game = new WordMateGame("p1", "p2");
// game.makeMove("p1", "a13");
// game.makeMove("p2", "b03");
// game.makeMove("p1", "p23");
// console.log(game.getTurn());
// console.log(game.getBoard());
app.use(express.json());
// app.use("/api/games", gamesRouter);

export default app;