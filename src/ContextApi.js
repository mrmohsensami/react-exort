import React, { useContext, useState } from "react";
import { names } from "./names";

const PersonContext = React.createContext();

function ContextApi() {
    const [people, setPeople] = useState(names);

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };

    return (
        <PersonContext.Provider value={{ removePerson }}>
            <h1>prop drilling</h1>
            <List people={people} />
        </PersonContext.Provider>
    );
}

const List = ({ people }) => {
    return (
        <ul>
            {people.map((person) => {
                return <SinglePerson {...person} />;
            })}
        </ul>
    );
};

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext);
    return (
        <li>
            <h2>{name}</h2>
            <button onClick={() => removePerson(id)}>remove</button>
        </li>
    );
};

export default ContextApi;
