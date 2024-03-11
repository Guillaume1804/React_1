import { useState } from "react";
import AddForm from "./form";

function Button() {
    const [showForm, setShowForm] = useState(false);

    const clicked = () => {
        setShowForm(!showForm);
    }

    const symbole = showForm ? "-" : "+";

    return (
        <div>
            <p>Add User <button onClick={clicked}>{symbole}</button></p>
            {showForm && <AddForm/>}
        </div>
    )
}

export default Button;