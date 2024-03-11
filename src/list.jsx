function ShowList() {
    const users = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 24 },
        { id: 3, name: 'Carol', age: 29 },
    ];

    return (
        <div>
            <h2>Liste de Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        Nom : {user.name}, Âge : {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowList;