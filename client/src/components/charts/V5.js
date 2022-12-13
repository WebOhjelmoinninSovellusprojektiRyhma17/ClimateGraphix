import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V1() {
    const [vostok, setvostok] = useState("");

    const URL = 'http://localhost:3001/'


    // Hakee tiedot tietokannasta
    const getvostokData = () => {
        axios.get(`${URL}vostok`)
            .then((response) => {
                setvostok(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getvostokData();
    }, []);

    const data = {
        datasets: [
            {
                label: "Vostok",
                data: vostok,                                      // tilamuuttuja, johon data on tallennettu tietokannasta
                borderColor: "rgb(219,112,147)",
                backgroundColor: "rgba(219,112,147, 0.5)",
                parsing: {
                    xAxisKey: "mean_age_if_the_air",               // x-akselin muuttuja tietokannassa
                    yAxisKey: "c02_concentration",                 // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                reverse: true,
                type: "linear",
                max: 420000,
                min: 0
            },
            y: {
                type: "linear",
                position: "right",
            },
        },
    };

    return (
        <div className="chart" >
            <h2>V5 Vostok Ice Core CO2 measurements, 417160 - 2342 years</h2>
            <Line options={options} data={data} />
            <div>
                <p>A collaborative ice-drilling project between Russia, the United States, and France at the Russian Vostok station in East Antarctica yielded the deepest ice core ever recovered, reaching a depth of 3,623 meters. The Vostok ice-core record extends through four climate cycles and is slightly older than 400,000 years. The ice core's entrapped air inclusions enable a direct record of past changes in atmospheric trace-gas composition. The Vostok ice core data showed a close correlation between Antarctic temperature and atmospheric concentrations of CO2. The extension of the Vostok CO2 record showed that CO2 levels have been rising and decending over hundreds of thousands of years ago. Still the present-day levels of CO2 are unprecedented during the past 420,000 years.</p>
            </div>
            <p><b><a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html" target="_blank" rel="noopener noreferrer">Link to description</a></b></p>
            <p><b><a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2" target="_blank" rel="noopener noreferrer">Link to datasource</a></b></p>
        </div>
    );
}
