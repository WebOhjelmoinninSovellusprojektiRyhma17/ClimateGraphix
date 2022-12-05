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
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
        scales: {
            x: {
                reverse: true,
                type: "linear",
                max: 800000,
                min: -2000,
                title: {
                    display: true,
                    text: 'Years BP'
                }
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
        <div className="v1" >
            <h2>V6 Ice core 800k year composite study CO2 measurements</h2>
            <Line data={data} options={options}/>
            <a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975" target="_blank" >Description</a><br></br>
            <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt" target="_blank" >Dataset</a>
        </div>
    );
}