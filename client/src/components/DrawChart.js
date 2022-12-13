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
    const [key, setKey] = useState(true);

    useEffect(() => {
        console.log(inputList);
    }, [])

    const AddV1 = event => {
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
        let exists = inputList.some(element => {
            if (element.key === '1') {
                return true;
            } else {
                return false;
            }
        })

        if (exists) {
            console.log("Key found");
        } else {
            setInputList(inputList.concat(<AddV1 key='1' />));
            console.log(inputList);
        }

    };

    const onAddV3Click = event => {
        let exists = inputList.some(element => {
            if (element.key === '2') {
                return true;
            } else {
                return false;
            }
        })

        if (exists) {
            console.log("Key found");
        } else {
            setInputList(inputList.concat(<AddV3 key='2' />));
            console.log(inputList);
        }
    };

    const onAddV5Click = event => {
        let exists = inputList.some(element => {
            if (element.key === '3') {
                return true;
            } else {
                return false;
            }
        })

        if (exists) {
            console.log("Key found");  
        } else {
            setInputList(inputList.concat(<AddV5 key='3' />));
            console.log(inputList);
        }
    };

    const onAddV6Click = event => {
        let exists = inputList.some(element => {
            if (element.key === '4') {
                return true;
            } else {
                return false;
            }
        })

        if (exists) {
            console.log("Key found");  
        } else {
            setInputList(inputList.concat(<AddV6 key='4' />));
            console.log(inputList);
        }
    };

    const onAddV7Click = event => {
        let exists = inputList.some(element => {
            if (element.key === '5') {
                return true;
            } else {
                return false;
            }
        })

        if (exists) {
            console.log("Key found");
        } else {
            setInputList(inputList.concat(<AddV7 key='5' />));
            console.log(inputList);
        }
    };

    const onAddV8Click = event => {
        let exists = inputList.some(element => {
            if (element.key === '6') {
                return true;
            } else {
                return false;
            }
        })

        if (exists) {
            console.log("Key found");
        } else {
            setInputList(inputList.concat(<AddV8 key='6' />));
            console.log(inputList);
        }
    };

    const onAddV9Click = event => {
        let exists = inputList.some(element => {
            if (element.key === '7') {
                return true;
            } else {
                return false;
            }
        })

        if (exists) {
            console.log("Key found");
        } else {
            setInputList(inputList.concat(<AddV9 key='7' />));
            console.log(inputList);
        }
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
