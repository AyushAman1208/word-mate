interface props{
    color:string;
} 
function InputBox(props:props){
    let elemStyle = ""+props.color;
    return(
        <div className="">
            <input type="text" name="input-text" id="input-text" className={`w-10 h-10 border-2 border-black text-red-800 font-extrabold text-[30px] ${props.color}`}/>
        </div>
    );
};

export default InputBox;