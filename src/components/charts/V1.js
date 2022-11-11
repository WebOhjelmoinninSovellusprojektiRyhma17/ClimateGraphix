import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import axios from "axios";

export default function V1() {
    const [globalA, setGlobalA] = useState([]);

    const URL = 'http://localhost:3001/'

    const getGlobalData = () => {
        axios.get(`${URL}global`) 
            .then((response) => {
                const GlobalAData = response.data.global.GlobalAData;
                setGlobalA(GlobalAData);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getGlobalData();
    }, []);

    const data = {
        datasets: [
            {
                label: "Temperature Anomalies from 1850",
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
        },
    };

    return (
        <div style={{ width: "50%" }}>
            <h1>Here text describing the chart</h1>
            <Line options={options} data={data} />
        </div>
    );
}