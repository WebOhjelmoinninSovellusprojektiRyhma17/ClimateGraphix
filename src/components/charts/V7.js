import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V7() {
    const [v71, setv71] = useState("");
    const [v72, setv72] = useState("");

    const URL = 'http://localhost:3001/'


    // Hakee tiedot tietokannasta
    const getv71Data = () => {
        axios.get(`${URL}v71`)
            .then((response) => {
                setv71(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getv72Data = () => {
        axios.get(`${URL}v72`)
            .then((response) => {
                setv72(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getv71Data();
        getv72Data();
    }, []);

    const data = {
        datasets: [
            {
                label: "C02 ppm",
                data: v71,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                yAxisID: 'v71',
                borderColor: "rgb(0,112,255)",
                backgroundColor: "rgba(0,112,255, 0.5)",
                parsing: {
                    xAxisKey: "date_format(Time, '%Y')",                      // x-akselin muuttuja tietokannassa
                    yAxisKey: "fifty",                           // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Antarctic temperature change",
                data: v72,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                yAxisID: 'v72',
                borderColor: "rgb(255,112,0)",
                backgroundColor: "rgba(255,112,0, 0.5)",
                parsing: {
                    xAxisKey: "date_format(Time, '%Y')",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "AntarcticTemperatureChange",                           // y-akselin muuttuja tietokannassa
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
                type: 'time',
                time: {
                    unit: 'year'
                }
            },
            v71: {
                type: "linear",
                position: "left",
            },
            v72: {
                type: "linear",
                position: "right",
            },
        },
    };

    return (
        <div className="V1" >
            <h2>V7 Evolution of global temperature over the past two million years</h2>
            <Line options={options} data={data} />
            <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html" target="_blank" >Description</a><br></br>
            <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2" target="_blank" >Datasets</a>
        </div>
    );
}
