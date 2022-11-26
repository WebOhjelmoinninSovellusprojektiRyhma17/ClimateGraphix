import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V4() {
    const [firstData, setFirstData] = useState([]);
    const [secondData, setSecondData] = useState([]);
    const [thirdData, setThirdData] = useState([]);

    const URL = 'http://localhost:3001/'

    // Hakee tiedot tietokannasta
    const getFirstData = () => {
        axios.get(`${URL}v4eka`)
            .then((response) => {
                setFirstData(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getSecondData = () => {
        axios.get(`${URL}v4toka`)
            .then((response) => {
                setSecondData(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getThirdData = () => {
        axios.get(`${URL}v4kolmas`)
            .then((response) => {
                setThirdData(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getFirstData();
        getSecondData();
        getThirdData();
    }, []);

    const data = {
        datasets: [
            {
                label: "Ice Core DE08",
                data: firstData,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                borderColor: "rgb(165,42,42)",
                backgroundColor: "rgba(165,42,42, 0.5)",
                parsing: {
                    xAxisKey: "Analysis",                               // x-akselin muuttuja tietokannassa
                    yAxisKey: "CO2 Mixing Ratio",                    // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Ice Core DE08-02",
                data: secondData,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                borderColor: "rgb(22,22,22)",
                backgroundColor: "rgba(22,22,22, 0.5)",
                parsing: {
                    xAxisKey: "Analysis Date",                               // x-akselin muuttuja tietokannassa
                    yAxisKey: "Mean Ice Depth, m",                    // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Ice Core DSS",
                data: thirdData,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                borderColor: "rgb(100,100,100)",
                backgroundColor: "rgba(100,100,100, 0.5)",
                parsing: {
                    xAxisKey: "Analysis Date",                               // x-akselin muuttuja tietokannassa
                    yAxisKey: "Mean Ice Depth, m",                    // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                //text: "Visualisation 1",
            },
        },
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "month"
                }
            },
            y: {
                type: "linear",
                position: "right",
            },
        },
    };

    return (
        <div className="v4" style={{ width: "100%" }} >
            <h2>Ice core measurements</h2>
            <Line options={options} data={data} />
        </div>
    );
}