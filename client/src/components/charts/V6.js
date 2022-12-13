import React, { useEffect } from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V6() {
    const [v6data, setV6data] = useState("");

    const URL = 'http://localhost:3001/'

    // Hakee tiedot tietokannasta
    const getData = () => {
        axios.get(`${URL}v6`)
            .then((response) => {
                setV6data(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getData();
    }, []);

    const data = {
        datasets: [
            {
                label: "CO2 measurements",
                data: v6data,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                borderColor: "rgb(210,105,30)",
                backgroundColor: "rgba(210,105,30, 0.5)",
                parsing: {
                    xAxisKey: "age",               // x-akselin muuttuja tietokannassa
                    yAxisKey: "co2_ppm",                 // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
        ],
    };

    const options = {

        plugins: {
            legend: {
                position: "top",
            },
        },
        scales: {
            x: {
                type: "linear",
                title: {
                    display: true,
                    text: 'Time in Years'
                },
                min: -800000,
                max: 2022
        
            },
            y: {
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
        <div className="chart" >
            <h2>V6 Ice core 800k year composite study CO2 measurements</h2>
            <Line data={data} options={options} />
            <div>
                <p>The chart represents findings of the European Project for Ice Coring in Antarctica (EPICA) Dome C ice core has allowed for the reconstruction of atmospheric CO2 concentrations for the past 800,000 years. In a recent study of old records have shown an anomaly in the records  The cause of this anomaly is not yet fully understood, but it is thought to be related to insufficient gas extraction in combination with ice relaxation during storage and ice structure. The corrected record partly resolves this issue, but not completely. In the last 10 000 years CO2 levels have been rising drasically in the influence of humans. </p>
            </div>
                <p><b><a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975" target="_blank" rel="noopener noreferrer">Link to description</a></b></p>
                <p><b><a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt" target="_blank" rel="noopener noreferrer">Link to datasource</a></b></p>
        </div>
    );
}