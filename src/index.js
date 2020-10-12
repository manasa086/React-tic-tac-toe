import React,{Fragment,useEffect,useState} from "react";
import ReactDOM from "react-dom";
import InputField from "./Components/InputField";
import Winner from "./Components/Winner";
import "./styles.css";

let wins = [
    [1, 2, 3],
    [1, 4, 7],
    [4, 5, 6],
    [7, 8, 9],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

const App=()=>{
    var [arr_x,set_arr_x]=useState(localStorage.getItem("arr_x")?JSON.parse(localStorage.getItem("arr_x")):[]);
    var [arr_y,set_arr_y]=useState(localStorage.getItem("arr_y")?JSON.parse(localStorage.getItem("arr_y")):[]);
    var firstInputValue="";
    var [inputFieldValue,setInputFieldValue]=useState("");
    let [isDisplay,setIsDisplay]=useState(localStorage.getItem("isDisplay")?JSON.parse(localStorage.getItem("isDisplay")):true);
    var [isBoxes,setIsBoxes]=useState(localStorage.getItem("isBoxes")?JSON.parse(localStorage.getItem("isBoxes")):false);
    
    var [isWinner,setWinner]=useState(localStorage.getItem("isWinner")?localStorage.getItem("isWinner"):false);
    
    const [inputValue,setInputValue]=useState(localStorage.getItem("inputValue")?JSON.parse(localStorage.getItem("inputValue")):["","","","","","","","",""]);
    const [turn,changeTurn]=useState(localStorage.getItem("turn")?JSON.parse(localStorage.getItem("turn")):null); 
    const [isDisabled,setIsDisabled]=useState(localStorage.getItem("isDisabled")?JSON.parse(localStorage.getItem("isDisabled")):["enabled","enabled","enabled","enabled","enabled","enabled","enabled","enabled","enabled"]);
    
    let [winner_string,setwinnerstring]=useState(localStorage.getItem("winner_string")?localStorage.getItem("winner_string"):"");
    const restart=()=>
    {

        localStorage.removeItem("inputValue");
        localStorage.removeItem("isDisplay");
        localStorage.removeItem("isBoxes");
        localStorage.removeItem("turn");
        localStorage.removeItem("isDisabled");
        localStorage.removeItem("isWinner");
        localStorage.removeItem("winner_string");
        localStorage.removeItem("arr_y");
        localStorage.removeItem("arr_x");
        window.location.reload(); 
    }

    let [global_id,changeGlobalId]=useState(0);
    useEffect(() => {
        localStorage.setItem("inputValue",JSON.stringify(inputValue));
        localStorage.setItem("isDisplay",JSON.stringify(isDisplay));
        localStorage.setItem("isBoxes",JSON.stringify(isBoxes));
        localStorage.setItem("turn",JSON.stringify(turn));
        localStorage.setItem("isDisabled",JSON.stringify(isDisabled));
    }, [inputValue,isDisplay,isBoxes,isDisabled,turn]);

    const reset=()=>{
        set_arr_x([]);
        set_arr_y([]);
        setWinner(false);
        setInputValue(["","","","","","","","",""])
      changeTurn(inputFieldValue);
       // console.log(firstInputValue);
        setIsDisabled(["enabled","enabled","enabled","enabled","enabled","enabled","enabled","enabled","enabled"])
        // setwinnerstring("");
        // setIsBoxes(true);
        // setIsDisplay(false);
        // localStorage.removeItem("arr_y");
        // localStorage.removeItem("arr_x");
        // localStorage.removeItem("isBoxes");
        // localStorage.removeItem("isWinner");
        // localStorage.removeItem("inputValue");
        // localStorage.removeItem("turn");
        // localStorage.removeItem("isDisplay");
        // localStorage.removeItem("isDisabled");
        // localStorage.removeItem("winner_string");
       // window.location.reload();
        
    }

    const updateInputField=(id)=>{
        let push=toPush(id,turn);
        console.log(push);
        if(push.length==0)
        {
    
        changeGlobalId(id);
        setInputValue(inputValue.map((each,index)=>{
            if(id==index)
            {
                return turn;
            }
            
            return each;

        }));
        setIsDisabled(isDisabled.map((each,index)=>{
            if(id==index)
            {
                return "disabled"
            }
            return each;
        }))
        
        if(turn=="X")
        {
            changeTurn("O")
        }
        if(turn=="O")
        {
            changeTurn("X")
        }
    }
    else
    {
        localStorage.setItem("push",JSON.stringify(push));
        setInputValue(inputValue.map((each,index)=>{
            if(id==index)
            {
                return turn;
            }
            
            return each;

        }));
        setIsDisabled(isDisabled.map((each,index)=>{
                return "disabled"
        }))
        setWinner(push);
        localStorage.setItem("isWinner",push);
        let data;
        if(push=='Tie')
        {
            data="Its a "+push ;
        }
        else
        {
            data="Player "+ push+"  Wins";
        }
        
        isWinner=="Tie"?setwinnerstring("Its a Tie"):setwinnerstring(data);
        isWinner=="Tie"?localStorage.setItem("winner_string","Its a Tie"):localStorage.setItem("winner_string",data);
    }
     
    }
    const ButDisplay=()=>{
    
        setIsDisplay(false);
        setIsBoxes(true);
    }
function toPush(id,turn)
{
    let winner="";
    if(turn=="X")
    {
        arr_x.push(Number(id)+1);
        //console.log(arr_x);
        localStorage.setItem("arr_x",JSON.stringify(arr_x))
        console.log(localStorage.getItem("arr_x"));
        if (check_X()) {
            winner="X";
            
        }
    }
    if(turn=="O")
    {
        arr_y.push(Number(id)+1);
        localStorage.setItem("arr_y",JSON.stringify(arr_y))
        if (check_Y()) {
            winner="O";
        }
    }
    let data=arr_y.length+arr_x.length;
    if(data==9)
    {
        
        winner="Tie";
    }
    if(winner.length>0)
    {
        return winner;
    }
    else
    {
        return winner;
    }
}
const check_X=()=> {
    for (let i = 0; i < wins.length; i++) {
        let move = wins[i][0];
        let move1 = wins[i][1];
        let move2 = wins[i][2];
        //  console.log(move, move1, move2);
        if (arr_x.includes(move) && arr_x.includes(move1) && arr_x.includes(move2)) {
            return true;
        }
    }
    return false;
}
const check_Y=()=> {
    for (let i = 0; i < wins.length; i++) {
        let move = wins[i][0];
        let move1 = wins[i][1];
        let move2 = wins[i][2];
        //  console.log(move, move1, move2);
        if (arr_y.includes(move) && arr_y.includes(move1) && arr_y.includes(move2)) {
            return true;
        }
    }
    return false;

}
const completed=(winner)=>{
    document.getElementById("winner").innerHTML=`${winner} Wins`;

}
    
    
    const changeInputValue=(event)=>{
        if(event.target.value=="x" || event.target.value=="X" || event.target.value=="O" || event.target.value=="o")
        {
            if(event.target.value=="x" || event.target.value=="X")
            {
                setInputFieldValue("X");
                changeTurn("X");
                firstInputValue="X";
            }
            else
            {
            setInputFieldValue("O");
            changeTurn("O");
            firstInputValue="O";
            }
        }
        else
        {
            alert("Please enter the values X/x (or) O/o");
        }
    }

    return (
        <Fragment>
        {isDisplay?<Fragment>Enter the values X/x or O/o:<input type="text" class="inp" onChange={changeInputValue} value={inputFieldValue}></input><br></br><span></span><p></p><button  onClick={ButDisplay}>Start</button></Fragment>:null}
        {isBoxes?<InputField className="overlay" inputValue={inputValue} isDisabled={isDisabled} updateInputField={updateInputField}></InputField>:null}
        
    {isWinner?<div><div className="division"><p>{winner_string}</p><button class="but" onClick={restart}>Restart</button></div></div>:null}
        {isDisplay?null:<button class='top' onClick={reset}>Reset</button>}
        </Fragment>
    );
    
}


ReactDOM.render(<App/>,document.querySelector("#root"));

