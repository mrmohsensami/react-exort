import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";

function App() {
    const defaultState = {
        people: [],
        isModalOpen: false,
        modalContent: "hello world",
    };

    const [name, setName] = useState("");
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name };
            dispatch({ type: "ADD_ITEM", payload: newItem });
            setName("");
        } else {
            dispatch({ type: "NO_VALUE" });
        }
    };

    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" });
    };

    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}

            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="form-group">
                        <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn">
                            Add Item
                        </button>
                    </div>
                </div>
            </form>
            <ul>
                {state.people.map((item) => {
                    return (
                        <li className="d-flex" key={item.id}>
                            <h2>{item.name}</h2>
                            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })} className="btn">
                                Remove
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default App;
