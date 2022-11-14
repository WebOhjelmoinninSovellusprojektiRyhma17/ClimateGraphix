import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import axios from "axios";

export default function V1() {
    const [globalA, setGlobalA] = useState([]);
    const [globalM, setGlobalM] = useState([]);
    const [northA, setNorthA] = useState([]);
    const [northM, setNorthM] = useState([]);
    const [southA, setSouthA] = useState([]);
    const [southB, setSouthB] = useState([]);

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
                console.log(globalM);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getNorthernData = () => {
        axios.get(`${URL}northern`) 
            .then((response) => {
                setNorthA(response.data);
                console.log(northA);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getNorthernMonthlyData = () => {
        axios.get(`${URL}gnorthernmonthly`) 
            .then((response) => {
                setNorthM(response.data);
                console.log(northM);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getGlobalData();
        getGlobalMonthlyData();
        getNorthernData();
        getNorthernMonthlyData();
    }, []);

    const data = {
        datasets: [
            {
                label: "Global Annual",
                data: globalA,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "Time",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1,
            },
            {
                label: "Global Monthly",
                data: globalM,
                borderColor: "rgb(223, 67, 132)",
                backgroundColor: "rgba(223, 67, 132, 0.5)",
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1,

            },
            {
                label: "Northern Annual",
                data: northA,
                borderColor: "rgb(666, 20, 15)",
                backgroundColor: "rgba(666, 20, 15, 0.5)",
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1,

            },
            {
                label: "Northern Monthly",
                data: northM,
                borderColor: "rgb(100, 50, 150)",
                backgroundColor: "rgba(100, 50, 150, 0.5)",
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1,

            },
            {
                label: "Southern Annual",
                data: southA,
                borderColor: "rgb(10, 30, 200)",
                backgroundColor: "rgba(10, 30, 200, 0.5)",
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1,

            },
            {
                label: "Southern Monthly",
                data: southB,
                borderColor: "rgb(20, 90, 10)",
                backgroundColor: "rgba(20, 90, 10, 0.5)",
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "time",
                    yAxisKey: "Anomaly",
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
                type: "linear",
                display: true,
                position: "bottom",
            },
            y: {
                type: "linear",
                display: true,
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