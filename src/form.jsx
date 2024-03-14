import { useState } from "react";
import AddInput from "./input";


function AddForm({setUsers , users , setShowForm}) {
    
    // Récupération des valeurs des inputs de l'enfant
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    
    const onDataChange1 = (data) => {
        setInputValue1(data)
    }
    const onDataChange2 = (data) => {
        setInputValue2(data)
    }
    const onDataChange3 = (data) => {
        setInputValue3(data)
    }
    
    const logi = (e) => {
        e.preventDefault();

        const newObject = {
            name: inputValue1,
            age: inputValue2,
            profession: inputValue3,
        }

        setUsers([...users, newObject])

        setShowForm(false)

    }

    return (
        <div>
            <form action="submit">
                <AddInput type="text" name="nom" id="IdName" onDataChange={onDataChange1}/>
                <br />
                <AddInput type="number" name="age" id="IdAge" onDataChange={onDataChange2}/>
                <br />
                <AddInput type="text" name="profession" id="IdProfession" onDataChange={onDataChange3}/>
                <br />
                <button type="submit" onClick={logi}>Ajouter</button>
            </form>
        </div>
    )
}

export default AddForm;
