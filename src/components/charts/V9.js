import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { getElementAtEvent, Doughnut } from "react-chartjs-2";
import { InteractionItem } from 'chart.js';
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V9() {

    // Määritellään ja alustetaan tilamuuttujat
    const [sectorData, setSectorData] = useState([]);
    const [subsectordata, setSubsectordata] = useState([]);
    const [subsectorfurtherdata, setSubsectorfurtherdata] = useState([]);

    const URL = 'http://localhost:3001/'

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
    }, []);

    // Ensimmäinen donitsi
    const data1 = {
        labels: ["Energy", "Industrial processes", "Waste", "Agriculture, Forestry & Land Use (AFOLU)"],
        datasets: [
            {
                data: sectorData,
                options: {
                    responsive: true,
                },
                backgroundColor: [
                    'rgb(128,0,0)',
                    'rgb(255,215,0)',
                    'rgb(255,0,0)',
                    'rgb(233,150,122)',
                ],
                parsing: {
                    key: "emissions"
                },
                borderWidth: 1,
            },
        ],
    };

    // Toinen donitsi. Tämä pitäisi saada ensimmäisen ulkopuolelle avautumaan tai parsia yksittäisiin donitseihin.
    // Pitäisi saada myös labelit jotenkin suoraan tietokannasta, kun ne tällähetkellä on kirjoitettu käsin.

    const data2 = {
        labels: ["Wastewater", "Unallocated fuel combustion", "Transport", "Rice Cultivation", "Livestock & Manure", "Landfills", "Grassland", "Fugitive emissions from energy", "Forest Land", "Energy in industry", "Energy in buildings (elec and heat)", "Energy in Agri & Fishing", "Cropland", "Crop Burning", "Chemical & petrochemical (industrial)", "Cement", "Agricultural Soils"],
        datasets: [
            {
                data: subsectordata,
                backgroundColor: [
                    'rgb(128,0,0)',
                    'rgb(139,0,0)',
                    'rgb(165,42,42)',
                    'rgb(178,34,34)',
                    'rgb(220,20,60)',
                    'rgb(255,0,0)',
                    'rgb(255,99,71)',
                    'rgb(255,127,80)',
                    'rgb(205,92,92)',
                    'rgb(240,128,128)',
                    'rgb(233,150,122)',
                    'rgb(250,128,114)',
                    'rgb(255,160,122)',
                    'rgb(255,69,0)',
                    'rgb(255,140,0)',
                    'rgb(255,165,0)',
                    'rgb(255,215,0)',
                ],
                parsing: {
                    key: "Share of global greenhouse gas emissions (%)"
                },
                borderWidth: 1,
            }
        ]
    }

    // Kolmas donitsi. Sama homma kuin edellisessä, mutta vielä tarkempi versio kakkosdonitsista.

    const data3 = {
        labels: ["Road", "Aviation", "Rail", "Pipeline", "Ship", "Residential", "Commercial", "Iron & Steel", "Non-ferous metals", "Machinery", "Food and tobacco", "Paper, pulp & printing", "Chemical & petrochemical (energy)", "Other industry", "Energy in Agri & Fishing", "Unallocated fuel combustion", "Coal", "Oil & Natural Gas", "Cement", "Chemical & petrochemical (industrial)", "Livestock & Manure", "Rice Cultivation", "Agricultural Soils", "Crop Burning", "Forest Land", "Cropland", "Grassland", "Landfills", "Wastewater"],
        datasets: [
            {
                data: subsectorfurtherdata,
                backgroundColor: [
                    'rgb(128,0,0)',
                    'rgb(255,215,0)',
                    'rgb(255,0,0)',
                    'rgb(233,150,122)',
                ],
                parsing: {
                    key: "Share of global greenhouse gas emissions (%)"
                },
                borderWidth: 1,
            },
        ],
    };

    const chartRef = useRef();

    const printElementAtEvent = (element) => {
        if (!element.length) return;
    
        const { datasetIndex, index } = element[0];
    
        console.log(data1.labels[index], data1.datasets[datasetIndex].data[index]);
      };

    const onClick = (event) => {
        console.log(getElementAtEvent(chartRef.current, event));
        printElementAtEvent(getElementAtEvent(chartRef.current, event));
    }

    // Määritellään, mitä palautetaan.
    return (
        <div className="V9">
            <h2>CO2 emissions by sectors</h2>
            <Doughnut
                ref={chartRef}
                data={data1}
                onClick={onClick}
            />
        </div>
    );
}