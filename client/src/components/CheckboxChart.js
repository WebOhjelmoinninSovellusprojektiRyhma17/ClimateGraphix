import React from "react";
import "chartjs-adapter-luxon";
import { useState } from "react";
import V1 from "./charts/V1";
import V3 from "./charts/V3";
import V5 from "./charts/V5";
import V6 from "./charts/V6";
import V7 from "./charts/V7";
import V8 from "./charts/V8";
import V9 from "./charts/V9";

export default function CheckboxChart() {

    const [inputList, setInputList] = useState([]);
    const [v1check, setV1check] = useState(false);
    const [v3check, setV3check] = useState(false);
    const [v5check, setV5check] = useState(false);
    const [v6check, setV6check] = useState(false);

    const AddV1 = event => {
        return <V1 />
    }
    const AddV3 = event => {
        return <V3 />
    }
    const AddV5 = event => {
        return <V5 />
    }
    const AddV6 = event => {
        return <V6 />
    }

    const handleV1Change = event => {
        if(event.target.checked === true) {
            setInputList(inputList.concat(<AddV1 key='1' />));
        }
    }
    const handleV3Change = () => {
        setV3check(true);
    }
    const handleV5Change = () => {
        setV5check(true);
    }
    const handleV6Change = () => {
        setV6check(true);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (v1check === true) {
            setInputList(inputList.concat(<AddV1 key='1' />));
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Select charts you want to display</h2>
                    <div>
                        <input type="checkbox" value="1" id="v1" onChange={handleV1Change} />
                        <label for="v1">Add V1 + V2 data</label>
                    </div>
                    <div>
                        <input type="checkbox" value="3" id="v3" onChange={handleV3Change} />
                        <label for="v3">Add V3 + V4 data</label>
                    </div>
                    <div>
                        <input type="checkbox" value="5" id="v5" onChange={handleV5Change}/>
                        <label for="v5">Add V5 data</label>
                    </div>
                    <div>
                        <input type="checkbox" value="6" id="v6" onChange={handleV6Change}/>
                        <label for="v6">Add V6 data</label>
                    </div>
                    <div>
                        <input type="checkbox" value="7" id="v7" />
                        <label for="v7">Add V7 data</label>
                    </div>
                    <div>
                        <input type="checkbox" value="8" id="v8" />
                        <label for="v8">Add V8 data</label>
                    </div>
                    <div>
                        <input type="checkbox" value="9" id="v9" />
                        <label for="v9">Add V9 data</label>
                    </div>
                    <h2>Sarakeasettelu</h2>
                    <div>
                        <input type="checkbox" value="10" id="10" />
                        <label for="10">Rinnakkain</label>
                    </div>
                    <div>
                        <input type="checkbox" value="11" id="11" />
                        <label for="11">Allekkain</label>
                    </div>
                    <button>Submit</button>
                    {inputList}
                </form>
            </div>
        </>
    )
}