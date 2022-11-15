import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V1() {
    const [globalA, setGlobalA] = useState("");
    const [globalM, setGlobalM] = useState("");
    const [northM, setNorthM] = useState("");
    const [southM, setSouthM] = useState("");

    const URL = 'http://localhost:3001/'


    // Hakee tiedot tietokannasta
    const getGlobalData = () => {
        axios.get(`${URL}global`)
            .then((response) => {
                setGlobalA(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getGlobalMonthlyData = () => {
        axios.get(`${URL}globalmonthly`)
            .then((response) => {
                setGlobalM(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getNorthernMonthlyData = () => {
        axios.get(`${URL}northernmonthly`)
            .then((response) => {
                setNorthM(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getSouthernMonthlyData = () => {
        axios.get(`${URL}southernmonthly`)
            .then((response) => {
                setSouthM(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getGlobalData();
        getGlobalMonthlyData();
        getNorthernMonthlyData();
        getSouthernMonthlyData();
    }, []);

    const data = {
        datasets: [
            {
                label: "Global Annual",
                data: globalA,
                borderColor: "rgb(255, 153, 204)",
                backgroundColor: "rgba(255, 153, 204, 0.5)",
                parsing: {
                    xAxisKey: "Time",
                    yAxisKey: "Anomaly (deg C)",
                },
                pointRadius: 1,
            },
            {
                label: "Global Monthly",
                data: globalM,
                borderColor: "rgb(255, 0, 127)",
                backgroundColor: "rgba(255, 0, 127, 0.5)",
                parsing: {
                    xAxisKey: "Time",
                    yAxisKey: "Anomaly (deg C)",
                },
                pointRadius: 1,
            },
            {
                label: "Northern Hemisphere Monthly",
                data: northM,
                borderColor: "rgb(0, 153, 153)",
                backgroundColor: "rgba(0, 153, 153, 0.5)",
                parsing: {
                    xAxisKey: "Time",
                    yAxisKey: "Anomaly (deg C)",
                },
                pointRadius: 1,
            },
            {
                label: "Southern Hemisphere Monthly",
                data: southM,
                borderColor: "rgb(0, 204, 0)",
                backgroundColor: "rgba(0, 204, 0, 0.5)",
                parsing: {
                    xAxisKey: "Time",
                    yAxisKey: "Anomaly (deg C)",
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
                text: "Visualisation 1",
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
        <div style={{ width: "50%" }}>
            <h1>Temperature Anomalies from 1850</h1>
            <Line options={options} data={data} />
        </div>
    );
}
