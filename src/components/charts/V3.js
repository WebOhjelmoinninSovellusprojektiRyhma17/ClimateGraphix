import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V3() {
    const [co2annual, setCo2annual] = useState("");
    const [co2monthly, setCo2monthly] = useState("");
    const [firstData, setFirstData] = useState([]);
    const [secondData, setSecondData] = useState([]);
    const [thirdData, setThirdData] = useState([]);

    const URL = 'http://localhost:3001/'

    // Hakee tiedot tietokannasta
    const getco2Annual = () => {
        axios.get(`${URL}co2annual`)
            .then((response) => {
                setCo2annual(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getco2Monthly = () => {
        axios.get(`${URL}co2monthly`)
            .then((response) => {
                setCo2monthly(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

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
        getco2Annual();
        getco2Monthly();
        getFirstData();
        getSecondData();
        getThirdData();
    }, []);

    const data = {
        datasets: [
            {
                label: "Co2 annual",
                data: co2annual,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                borderColor: "rgb(165,42,42)",
                backgroundColor: "rgba(165,42,42, 0.5)",
                parsing: {
                    xAxisKey: "year",                               // x-akselin muuttuja tietokannassa
                    yAxisKey: "mean",                    // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Co2 monthly",
                data: co2monthly,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                borderColor: "rgb(255,99,71)",
                backgroundColor: "rgba(255,99,71, 0.5)",
                parsing: {
                    xAxisKey: "date",                               // x-akselin muuttuja tietokannassa
                    yAxisKey: "monthly average",                    // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Ice Core DE08",
                data: firstData,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                borderColor: "rgb(0,255,127)",
                backgroundColor: "rgba(0,255,127, 0.5)",
                parsing: {
                    xAxisKey: "Mean Air Age",                               // x-akselin muuttuja tietokannassa
                    yAxisKey: "CO2 Mixing Ratio",                    // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
                hidden: true
            },
            {
                label: "Ice Core DE08-02",
                data: secondData,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                borderColor: "rgb(0,255,255)",
                backgroundColor: "rgba(0,255,255, 0.5)",
                parsing: {
                    xAxisKey: "Mean Air Age",                               // x-akselin muuttuja tietokannassa
                    yAxisKey: "CO2 Mixing Ratio",                    // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
                hidden: true
            },
            {
                label: "Ice Core DSS",
                data: thirdData,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                borderColor: "rgb(255,215,0)",
                backgroundColor: "rgba(255,215,0, 0.5)",
                parsing: {
                    xAxisKey: "Mean Air Age",                               // x-akselin muuttuja tietokannassa
                    yAxisKey: "CO2 Mixing Ratio",                    // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
                hidden: true
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
        <div className="v2" style={{ width: "100%" }} >
            <h2>V3 + V4 Mauna Loa CO2 measurements and Ice Core measurements</h2>
            <Line options={options} data={data} />
            <div>
            <p>Tähän tulee joskus vielä lyhyt ja ytimekäs teksti, joka kertoo kuvaajasta</p>
            <a href="https://gml.noaa.gov/ccgg/trends/" target="_blank" >Datasource</a>
            </div>
            <div>
            <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html" target="_blank" >Data measurement</a>
            </div>
            <div>
            <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html" target="_blank" >Ice Core description</a>
            </div>
            <div>
            <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat" target="_blank" >Ice Core dataset</a>
            </div>
        </div>
    );
}