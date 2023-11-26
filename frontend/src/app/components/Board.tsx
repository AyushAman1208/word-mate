function Board() {
    let arr = [1,2,3,4,5,6,7,8]
  return (
    <>
      
      <div className="flex items-center flex-col justify-center align-middle mt-[40%]">
        {
            arr.map?.((num) => (
                <div>{
                    <div className="flex flex-row gap-x-2">{arr.map?.(num => (
                        <p>bla</p>
                    ))}</div>
                }</div>
            ))
        }
      </div>
    </>
  );
}

export default Board;
