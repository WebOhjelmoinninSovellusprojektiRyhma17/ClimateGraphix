import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V7() {
    const [v71, setv71] = useState([]);
    const [v72, setv72] = useState([]);
    const [v10, setV10] = useState([]);

    const URL = 'http://localhost:3001/'
    const events = v10.map(function (item) { return item.event });

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

    const getv10Data = () => {
        axios.get(`${URL}v10`)
            .then((response) => {
                setV10(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getv71Data();
        getv72Data();
        getv10Data();
    }, []);

    const data = {
        datasets: [
            {
                label: "Antarctic temperature change",
                data: v71,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                yAxisID: 'v71',
                borderColor: "rgb(0,112,255)",
                backgroundColor: "rgba(0,112,255, 0.5)",
                parsing: {
                    xAxisKey: "Time",                      // x-akselin muuttuja tietokannassa
                    yAxisKey: "fifty",                           // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "CO2 ppm",
                data: v72,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                yAxisID: 'v72',
                borderColor: "rgb(255,112,0)",
                backgroundColor: "rgba(255,112,0, 0.5)",
                parsing: {
                    xAxisKey: "Time",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "AntarcticTemperatureChange",                           // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Humans evolution and activities",
                data: v10,
                borderColor: "rgb(255,215,0)",
                backgroundColor: "rgba(255,215,0, 0.5)",
                parsing: {
                    xAxisKey: "years ago",
                    yAxisKey: "one",
                },
                pointRadius: 10,
                showLine: false,
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return events[context.dataIndex];
                        },
                    }
                }
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                max: 2022,
                title: {
                    display: true,
                    text: 'Time in years'
                }
            },
            v71: {
                type: "linear",
                position: "left",
                title: {
                    display: true,
                    text: 'Antarctic temperature change (ºC)'
                }
            },
            v72: {
                type: "linear",
                position: "right",
                title: {
                    display: true,
                    text: 'CO2 ppm'
                }
            },
        },
    };

    return (
        <div className="V7" >
            <h2>V7 Evolution of global temperature over the past two million years</h2>
            <Line options={options} data={data} />
            <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html" target="_blank" >Description</a><br></br>
            <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2" target="_blank" >Datasets</a>
        </div>
    );
}
