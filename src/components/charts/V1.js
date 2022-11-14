import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import axios from "axios";

export default function V1() {
    const [globalA, setGlobalA] = useState([]);
    const [globalM, setGlobalM] = useState([]);

    const URL = 'http://localhost:3001/'
    

    // Hakee tiedot tietokannasta
    const getGlobalData = () => {
        axios.get(`${URL}global`) 
            .then((response) => {
                setGlobalA(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getGlobalMData = () => {
        axios.get(`${URL}monthly`) 
            .then((response) => {
                setGlobalM(response.data);
                console.log(globalM);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getGlobalData();
        getGlobalMData();
    }, []);

    const data = {
        datasets: [
            {
                label: "Global Annually",
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
                backgroundColor: "rgba(244, 70, 132, 0.5)",
                yAxisID: "Anomaly",
                parsing: {
                    xAxisKey: "Time",
                    yAxisKey: "Anomaly",
                },
                pointRadius: 1,

            }
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
            Anomaly: {
                type: "linear",
                display: true,
                position: "right",
            },
            Time: {
                type: "linear",
                display: true,
                position: "bottom",
            }
        },
    };

    return (
        <div style={{ width: "50%" }}>
            <h1>Temperature Anomalies from 1850</h1>
            <Line options={options} data={data} />
        </div>
    );
}