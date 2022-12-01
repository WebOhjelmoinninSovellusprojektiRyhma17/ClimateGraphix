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
    const [sectorLabel, setSectorLabel] = useState([]);

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
        console.log(sectorLabels);
        console.log(industrySub);
    }, []);

    let energySub = subsectordata.slice(0, 6);
    let industrySub = subsectordata.slice(6, 8);
    let wasteSub = subsectordata.slice(15, 17);
    let agricultureSub = subsectordata.slice(8, 14);

    let sectorLabels = sectorData.map(function (item) {
        return item.sectorname;
    })

    let subsectorLabels = subsectordata.map(function (item) {
        return item.sectorname;
    })

    // Ensimmäinen donitsi
    const data = {
        datasets: [
            {
                //labels: sectorLabels,
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
        ],
    };

    const energyData = {
        data: energySub,
        backgroundColor: [
            'rgb(238,232,170)',
            'rgb(152,251,152)',
            'rgb(64,224,208)',
            'rgb(255,182,193)',
            'rgb(65,105,225)',
            'rgb(218,112,214)',
        ],
        parsing : {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    const industryData = {
        data: industrySub,
        backgroundColor: [
            'rgb(238,232,170)',
            'rgb(152,251,152)',
            'rgb(64,224,208)',
            'rgb(255,182,193)',
            'rgb(65,105,225)',
            'rgb(218,112,214)',
        ],
        parsing : {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    const wasteData = {
        data: wasteSub,
        backgroundColor: [
            'rgb(238,232,170)',
            'rgb(152,251,152)',
            'rgb(64,224,208)',
            'rgb(255,182,193)',
            'rgb(65,105,225)',
            'rgb(218,112,214)',
        ],
        parsing : {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    const agricultureData = {
        data: agricultureSub,
        backgroundColor: [
            'rgb(238,232,170)',
            'rgb(152,251,152)',
            'rgb(64,224,208)',
            'rgb(255,182,193)',
            'rgb(65,105,225)',
            'rgb(218,112,214)',
        ],
        parsing : {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    // Lisää datasetin
    function addData(chart, data) {
        chart.data.datasets.push(data);
        chart.update();
    }

    // Poistaa nykyisen chartin
    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.pop()

        chart.update();
    }

    // Funktio, joka ajetaan aina klikatessa
    const onClick = (event) => {

        const chart = chartRef.current;                             // Klikattu chartti
        const element = (getElementAtEvent(chart, event));          // Klikatun sektorin data muuttujaan
        const { index } = element[0];                 // Eritellään indeksi ja datasetin indeksi sektorista

        // if else, jonka pitäsi joskus tulostaa uusi chartti tiettyä sektoria klikattaessa

        switch (index) {
            case 0:
                console.log("ensimmäinen sektori");
                removeData(chart);
                addData(chart, energyData);
                break;
            case 1:
                console.log("toinen sektori");
                removeData(chart);
                addData(chart, industryData);
                break;
            case 2:
                console.log("kolmas sektori");
                removeData(chart);
                addData(chart, wasteData);
                break;
            case 3:
                console.log("neljäs sektori");
                removeData(chart);
                addData(chart, agricultureData);
                break;
            default:
                break;
        }
    }

    // Määritellään, mitä palautetaan.
    return (
        <div className="V9">
            <h2>CO2 emissions by sectors</h2>
            <Doughnut
                id="eka"
                ref={chartRef}
                data={data}
                onClick={onClick}
            />
        </div>
    );
}