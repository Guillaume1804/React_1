import { useState } from "react";
import AddForm from "./form";

function Button({setUsers , users}) {
    const [showForm, setShowForm] = useState(false);

    const clicked = () => {
        setShowForm(!showForm);
    }

    const symbole = showForm ? "-" : "+";

    return (
        <div>
            <p>Add User <button onClick={clicked}>{symbole}</button></p>
            {showForm && <AddForm setUsers={setUsers} users={users} setShowForm={setShowForm}/>}
        </div>
    )
}

export default Button;