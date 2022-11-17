import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V3() {
    const [co2annual, setCo2annual] = useState("");
    const [co2monthly, setCo2monthly] = useState("");

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

    useEffect(() => {
        getco2Annual();
        getco2Monthly();
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
                    xAxisKey: "decimal date",                               // x-akselin muuttuja tietokannassa
                    yAxisKey: "average",                    // y-akselin muuttuja tietokannassa
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
                type: "linear",
                min: 1958,
                max: 2022,
            },
            y: {
                type: "linear",
                position: "right",
            },
        },
    };

    return (
        <div className="v2" style={{ width: "100%" }} >
            <h2>Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958</h2>
            <Line options={options} data={data} />
            <div>
            <p>Tähän tulee joskus vielä lyhyt ja ytimekäs teksti, joka kertoo kuvaajasta</p>
            <a href="https://gml.noaa.gov/ccgg/trends/" target="_blank" >Datasource</a>
            </div>
            <div>
            <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html" target="_blank" >Data measurement</a>
            </div>
        </div>
    );
}