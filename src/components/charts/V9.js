import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { getElementAtEvent, Doughnut } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V9() {

    // Määritellään ja alustetaan tilamuuttujat
    const [sectorData, setSectorData] = useState([]);
    const [subsectordata, setSubsectordata] = useState([]);
    const [subsectorfurtherdata, setSubsectorfurtherdata] = useState([]);

    const URL = 'http://localhost:3001/'
    const chartRef = useRef();

    // Hakee tiedot tietokannasta
    const getSectorData = () => {
        axios.get(`${URL}sector`)
            .then((response) => {
                setSectorData(response.data);
                console.log(sectorData);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getSubSectorData = () => {
        axios.get(`${URL}subsector`)
            .then((response) => {
                setSubsectordata(response.data);
                console.log(subsectordata);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getSubSectorFurtherData = () => {
        axios.get(`${URL}subsectorfurther`)
            .then((response) => {
                setSubsectorfurtherdata(response.data);
                console.log(subsectorfurtherdata);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getSectorData();
        getSubSectorData();
        getSubSectorFurtherData();
        console.log(industrySub);
    }, []);

    let industrySub = subsectordata.slice(6, 8);

    // Ensimmäinen donitsi
    const data = {
        datasets: [
            {
                data: sectorData,
                //borderColor: "rgb(255,182,193)",
                backgroundColor: [
                    'rgb(238,232,170)',
                    'rgb(152,251,152)',
                    'rgb(64,224,208)',
                    'rgb(255,182,193)',
                ],
                parsing: {
                    key: "emissions"
                },
                options: {
                    responsive: true,
                    redraw: true,
                    datasetIdKey: 'eka',
                },
                borderWidth: 1,
            },
            {
                data: [1, 2, 3],
                hidden: true
            }
        ],
    };

    const subData = {
        data: subsectordata,
        backgroundColor: [
            'rgb(238,232,170)',
            'rgb(238,232,170)',
            'rgb(238,232,170)',
            'rgb(238,232,170)',
            'rgb(238,232,170)',
            'rgb(238,232,170)',
            'rgb(152,251,152)',
            'rgb(152,251,152)',
            'rgb(64,224,208)',
            'rgb(64,224,208)',
            'rgb(255,182,193)',
            'rgb(255,182,193)',
            'rgb(255,182,193)',
            'rgb(255,182,193)',
            'rgb(255,182,193)',
            'rgb(255,182,193)',
            'rgb(255,182,193)',
        ],
        parsing: {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    const subfurtherData = {
        data: subsectorfurtherdata,
        parsing: {
            key: "Share of global greenhouse gas emissions (%)"
        },
        backgroundColor: [
            'rgb(238,232,170)',
        ],
        circumference: 263.65
    }

    const options = {
        options: {
            plugins: {
                tooltip: {
                    label: "kfapo"
                }
            }
        }
    }

    // Lisää datasetin
    function addData(chart, data) {
        chart.data.datasets.push(data);
        chart.update();
    }

    // Poistaa nykyisen chartin
    function removeData(chart) {
        chart.data.datasets.pop()

        chart.update();
    }

    // Funktio, joka ajetaan aina klikatessa
    const onClick = (event) => {

        const chart = chartRef.current;                             // Klikattu chartti
        const element = (getElementAtEvent(chart, event));          // Klikatun sektorin data muuttujaan
        const { datasetIndex} = element[0];                 // Eritellään indeksi ja datasetin indeksi sektorista

        // if else, jonka pitäsi joskus tulostaa uusi chartti tiettyä sektoria klikattaessa

        switch (datasetIndex) {
            case 0:
                console.log("ensimmäinen sektori");
                removeData(chart)
                addData(chart, subData);
                break;
            case 1:
                console.log("neljäs sektori");
                addData(chart, subfurtherData);
                break;
            default:
                break;
        }
        console.log(element);
    }

    // Määritellään, mitä palautetaan.
    return (
        <div className="V9">
            <h2>CO2 emissions by sectors</h2>
            <Doughnut
                ref={chartRef}
                data={data}
                options={options}
                onClick={onClick}
            />
        </div>
    );
}