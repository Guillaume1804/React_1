import AddInput from "./input";

// TODO Faire fonction permettant d'enregitrer un nouveau USER 

function AddForm() {
    const logi = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form action="submit">
                <AddInput type="text" name="nom" id="IdName" />
                <br />
                <AddInput type="number" name="age" id="IdAge" />
                <br />
                <AddInput type="text" name="profession" id="IdProfession" />
                <br />
                <button type="submit" onClick={logi}>Ajouter</button>
            </form>
        </div>
    )
}

export default AddForm;