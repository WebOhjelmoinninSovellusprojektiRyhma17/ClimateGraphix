import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V3() {
    const [co2annual, setCo2annual] = useState([]);
    const [co2monthly, setCo2monthly] = useState([]);
    const [firstData, setFirstData] = useState([]);
    const [secondData, setSecondData] = useState([]);
    const [thirdData, setThirdData] = useState([]);
    const [v10, setV10] = useState([]);

    const URL = process.env.REACT_APP_API_ADDRESS + '/'

    const events = v10.map(function (item) { return item.event });
    const parsedEvents = events.slice(9, 15);
    const parsedV10 = v10.slice(9, 15);

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

    const getv10Data = () => {
        axios.get(`${URL}v10`)
            .then((response) => {
                setV10(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getco2Annual();
        getco2Monthly();
        getFirstData();
        getSecondData();
        getThirdData();
        getv10Data();
    }, []);

    const data = {
        labels: events,
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
            {
                label: " V10 Humans evolution and activities",
                data: parsedV10,
                borderColor: "rgb(255,215,0)",
                backgroundColor: "rgba(255,215,0, 0.5)",
                parsing: {
                    xAxisKey: "ce",
                    yAxisKey: "hundred",
                },
                pointRadius: 10,
                showLine: false,
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return parsedEvents[context.dataIndex];
                        },
                    }
                },
                hidden: true
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "month"
                },
                title: {
                    display: true,
                    text: "Time in Years"
                }
            },
            y: {
                type: "linear",
                position: "right",
                title: {
                    display: true,
                    text: "CO2 Mixing Ratio"
                }
            },
        },
    };

    return (
        <div className="chart">
            <h2>V3 + V4 Mauna Loa CO2 measurements and Ice Core measurements</h2>
            <Line options={options} data={data} />
            <div>
                <h5>Mauna Loa : </h5>
                <p>Shows CO2 measurements in Mauna Loa Observaroty in Hawaii starting from March of 1958. Orange line represent the monthly values that are calculated as average from daily means.
                    Red line represent the same, after correction for the average seasonal cycle. </p>
            </div>
            <p><b><a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html" target="_blank" rel="noopener noreferrer">Link to description</a></b></p>
            <p><b><a href="https://gml.noaa.gov/ccgg/trends/" target="_blank" rel="noopener noreferrer">Link to datasource</a></b></p>
            <div>
                <h5>Antarctic Ice Core Records :</h5>
                <p>Represent records of CO2 mixing ratios from three different ice cores from Law Dome, Antarctica from 1006 B.C. to 1978 B.C. </p>
            </div>
            <div>
                <p><b><a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html" target="_blank" rel="noopener noreferrer">Links to description</a></b></p>
                <p><b><a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat" target="_blank" rel="noopener noreferrer">Link to datasource</a></b></p>
            </div>
            <div>
                <h5>Human Evolution and Activities :</h5>
                <p>Yellow dots show single activities in human history that could have influenced the progression of climate change. By hovering over the dots you can see information about the event.  </p>
            </div>
            <div>
                <p><b><a href="https://www.southampton.ac.uk/~cpd/history.html" target="_blank" rel="noopener noreferrer">Link to datasource</a></b></p>
            </div>
        </div>
    );
}