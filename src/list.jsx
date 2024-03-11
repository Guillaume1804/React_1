function UserCard({name, age, profession}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age : {age}</p>
            <p>Profession : {profession}</p>
        </div>
    );
};

export default UserCard;