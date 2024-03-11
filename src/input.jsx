import { useState } from "react";

function AddInput(props) {
    const [InputValue, setInputValue]= useState("");

    const changeValue = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <label htmlFor={props.id}>Votre {props.name}</label>
            <input type={props.type} name={props.name} id={props.id} value={InputValue} onChange={changeValue}/>
            <br />
        </div>
    )
}

export default AddInput;