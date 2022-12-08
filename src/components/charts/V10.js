import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V7() {
    const [v10, setV10] = useState([]);

    const URL = 'http://localhost:3001/'


    // Hakee tiedot tietokannasta
    const getv10Data = () => {
        axios.get(`${URL}v10`)
            .then((response) => {
                setV10(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getv10Data();
    }, []);

    const events = v10.map(function (item) { return item.event });

    const data = {
        //labels: events,
        datasets: [
            {
                label: "Human events",
                data: v10,
                borderColor: "rgb(255,215,0)",
                backgroundColor: "rgba(255,215,0, 0.5)",
                parsing: {
                    xAxisKey: "years",
                    yAxisKey: "one",
                },
                pointRadius: 10,
                showLine: false,
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        //console.log(context);
                        return events[context.dataIndex];
                    },
                    title: function(context) {
                        return '';
                    }
                }
            }
        },
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                reverse: true,
                title: {
                    display: true,
                    text: 'Time in years BP'
                },
            },
            y: {
                type: "linear"
            }
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
