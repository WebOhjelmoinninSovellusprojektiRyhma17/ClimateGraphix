import React, { useEffect, useRef } from "react";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";
import V1 from "./charts/V1";
import V3 from "./charts/V3";
import V5 from "./charts/V5";
import V6 from "./charts/V6";
import V7 from "./charts/V7";
import V8 from "./charts/V8";
import V9 from "./charts/V9";

export default function DrawChart() {

    const [inputList, setInputList] = useState([]);

    const AddV1 = event => {
        console.log("Add v1 clicked");
        return <V1 />;
    }
    const AddV3 = event => {
        return <V3 />;
    }
    const AddV5 = event => {
        return <V5 />;
    }
    const AddV6 = event => {
        return <V6 />;
    }
    const AddV7 = event => {
        return <V7 />;
    }
    const AddV8 = event => {
        return <V8 />;
    }
    const AddV9 = event => {
        return <V9 />;
    }

    const onAddV1Click = event => {
        setInputList(inputList.concat(<AddV1 key={inputList.length} />));
    };

    const onAddV3Click = event => {
        setInputList(inputList.concat(<AddV3 key={inputList.length} />));
    };

    const onAddV5Click = event => {
        setInputList(inputList.concat(<AddV5 key={inputList.length} />));
    };

    const onAddV6Click = event => {
        setInputList(inputList.concat(<AddV6 key={inputList.length} />));
    };

    const onAddV7Click = event => {
        setInputList(inputList.concat(<AddV7 key={inputList.length} />));
    };

    const onAddV8Click = event => {
        setInputList(inputList.concat(<AddV8 key={inputList.length} />));
    };

    const onAddV9Click = event => {
        setInputList(inputList.concat(<AddV9 key={inputList.length} />));
    };

    return (
        <>
            <button onClick={onAddV1Click}>Add V1 + V2 data</button>
            <button onClick={onAddV3Click}>Add V3 + V4 data</button>
            <button onClick={onAddV5Click}>Add V5 data</button>
            <button onClick={onAddV6Click}>Add V6 data</button>
            <button onClick={onAddV7Click}>Add V7 data</button>
            <button onClick={onAddV8Click}>Add V8 data</button>
            <button onClick={onAddV9Click}>Add V9 data</button>
            {inputList}
        </>
    )
}
