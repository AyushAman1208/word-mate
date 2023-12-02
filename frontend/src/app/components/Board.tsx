import InputBox from "./InputBox";
function Board() {
    let arr = [1,2,3,4,5,6,7,8]
    let currColor= true;
  return (
    <>
      
      <div className="flex items-center flex-col justify-center align-middle mt-[50%] border-black">
        {
            arr.map?.((row) => (
                <div>{
                    <div className="flex flex-row p-0">{arr.map?.((col) => (
                        <InputBox row = {row} col = {col} />
                    ))}</div>
                }</div>
            ))
        }
      </div>
    </>
  );
}

export default Board;
