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
        <div className="v1" >
            <h2>Vostok Ice Core CO2 measurements, 417160 - 2342 years</h2>
            <Line options={options} data={data} />
            <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html" target="_blank" >Description</a><br></br>
            <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2" target="_blank" >Datasets</a>
            <p>In January 1998, the collaborative ice-drilling project between Russia, the United States, and France at the Russian Vostok station in East Antarctica yielded the deepest ice core ever recovered, reaching a depth of 3,623 m (Petit et al. 1997, 1999). Ice cores are unique with their entrapped air inclusions enabling direct records of past changes in atmospheric trace-gas composition. Preliminary data indicate the Vostok ice-core record extends through four climate cycles, with ice slightly older than 400 kyr (Petit et al. 1997, 1999). Because air bubbles do not close at the surface of the ice sheet but only near the firn-ice transition (that is, at ~90 m below the surface at Vostok), the air extracted from the ice is younger than the surrounding ice (Barnola et al. 1991). Using semiempirical models of densification applied to past Vostok climate conditions, Barnola et al. (1991) reported that the age difference between air and ice may be ~6000 years during the coldest periods instead of ~4000 years, as previously assumed. Ice samples were cut with a bandsaw in a cold room (at about -15°C) as close as possible to the center of the core in order to avoid surface contamination (Barnola et al. 1983). Gas extraction and measurements were performed with the "Grenoble analytical setup," which involved crushing the ice sample (~40 g) under vacuum in a stainless steel container without melting it, expanding the gas released during the crushing in a pre-evacuated sampling loop, and analyzing the CO2 concentrations by gas chromatography (Barnola et al. 1983). The analytical system, except for the stainless steel container in which the ice was crushed, was calibrated for each ice sample measurement with a standard mixture of CO2 in nitrogen and oxygen. For further details on the experimental procedures and the dating of the successive ice layers at Vostok, see Barnola et al. (1987, 1991), Lorius et al. (1985), and Petit et al. (1999).</p>
        </div>
    );
}
