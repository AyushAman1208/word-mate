"use client";
import { useEffect, useState } from "react";
import { scoringMechanism } from "../helpers/scoring";

interface props {
  row: number;
  col: number;
}

const enteredChar: string[][] = new Array(8)
  .fill("")
  .map(() => new Array(8).fill(""));
function InputBox(props: props) {
  const color =
    (props.row % 2 === 0 && props.col % 2 == 0) ||
    (props.row % 2 !== 0 && props.col % 2 !== 0)
      ? "bg-slate-300"
      : "bg-white";
  const [inputStatus, setInputStatus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [validWords, setValidWords] = useState("");

  return (
    <div className="">
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          setInputStatus(true);
          enteredChar[props.row - 1][props.col - 1] = inputValue;
          let ans:string = scoringMechanism(enteredChar, props.row - 1, props.col - 1);
          setValidWords(ans);
        }}
      >
        <input
          value={inputValue}
          disabled={inputStatus}
          onChange={(e) => {
            setInputValue(
              e.target.value[e.target.value.length - 1].toUpperCase()
            );
          }}
          type="text"
          name={`input-text${props.row}${props.col}`}
          id="input-text"
          className={`w-10 h-10 border-2 border-black text-black font-extrabold text-[30px] ${color}`}
        />
      </form>
    </div>
  );
}

export default InputBox;
