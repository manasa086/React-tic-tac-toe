import React,{Fragment,useState,useEffect} from "react";
import "../styles.css";


const InputField=(props)=>{
    var attribute="";

    const updateInputField=(event)=>{
        props.updateInputField(event.target.id);
    }
    

    return (
       
            <table className="pos">
        <tbody>
            <tr>
                <td id="11">
                    <input type="text" id="0" className="input" value={props.inputValue[0]} disabled={props.isDisabled[0]==="enabled"?(attribute):!attribute} onClick={updateInputField}></input>
                </td>
                <td id="12">
                    <input type="text" id="1" className="input" value={props.inputValue[1]} disabled={props.isDisabled[1]==="enabled"?(attribute):!attribute} onClick={updateInputField}></input>
                </td>
                <td id="13">
                    <input type="text" id="2" className="input" value={props.inputValue[2]} disabled={props.isDisabled[2]==="enabled"?(attribute):!attribute} onClick={updateInputField}></input>
                </td>
            </tr>
            <tr>
                <td id="14">
                    <input type="text" id="3" className="input" value={props.inputValue[3]} disabled={props.isDisabled[3]==="enabled"?(attribute):!attribute} onClick={updateInputField}></input>
                </td>
                <td id="15">
                    <input type="text" id="4" className="input" value={props.inputValue[4]} disabled={props.isDisabled[4]==="enabled"?(attribute):!attribute} onClick={updateInputField}></input>
                </td>
                <td id="16">
                    <input type="text" id="5" className="input" value={props.inputValue[5]} disabled={props.isDisabled[5]==="enabled"?(attribute):!attribute} onClick={updateInputField}></input>
                </td>
            </tr>
            <tr>
                <td id="17">
                    <input type="text" id="6" className="input" value={props.inputValue[6]} disabled={props.isDisabled[6]==="enabled"?(attribute):!attribute} onClick={updateInputField}></input>
                </td>
                <td id="18">
                    <input type="text" id="7" className="input" value={props.inputValue[7]} disabled={props.isDisabled[7]==="enabled"?(attribute):!attribute} onClick={updateInputField}></input>
                </td>
                <td id="19">
                    <input type="text" id="8" className="input"  value={props.inputValue[8]} disabled={props.isDisabled[8]==="enabled"?(attribute):!attribute} onClick={updateInputField}></input>
                </td>
            </tr>
        </tbody>
        </table>
        
        
    )



}

export default InputField;