import React from "react";
import { useState } from "react";
import "./css/App.css";
import ItemList from "./components/items";

function App() {
    // store current item
    const [item, setItem] = useState("");
    // Store all items
    const [items, setItems] = useState([]);
    // store ids
    const [id, setID] = useState(0);

    // Adding when a new item comes along
    function newItem(newItem) {
        const obj = {
            item: newItem,
            id: id,
        };

        setItems((items) => [...items, obj]);

        setID(id + 1);
    }

    // when for is submitted
    function formSubmit(e) {
        e.preventDefault();
        newItem(item);
        setItem("");
    }

    // update state when changed
    function itemUpdate(e) {
        setItem(e.target.value);
    }

    function callBackRemove() {
        console.log("Callback in parent worked");
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <input value={item} type="text" onChange={itemUpdate}></input>

                <button>Submit</button>
            </form>

            <ItemList passedOBJ={{ items, callBackRemove }} />
        </div>
    );
}

export default App;
