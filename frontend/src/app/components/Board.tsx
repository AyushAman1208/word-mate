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
                        <InputBox color={((row%2===0 && col%2==0)||(row%2!==0 && col%2 !==0))?"bg-slate-500":"bg-white"} />
                    ))}</div>
                }</div>
            ))
        }
      </div>
    </>
  );
}

export default Board;
