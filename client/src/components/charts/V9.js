import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { getElementAtEvent, getDatasetAtEvent, Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V9() {
    // Määritellään ja alustetaan tilamuuttujat ja muut muuttujat
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
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getSubSectorData = () => {
        axios.get(`${URL}subsector`)
            .then((response) => {
                setSubsectordata(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    const getSubSectorFurtherData = () => {
        axios.get(`${URL}subsectorfurther`)
            .then((response) => {
                setSubsectorfurtherdata(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getSectorData();
        getSubSectorData();
        getSubSectorFurtherData();
    }, []);

    // Parsitaan tuleva data sopiviin osiin, jotta niistä saadaan yksittäisiä chartteja
    let energySub = subsectordata.slice(0, 6);
    let industrySub = subsectordata.slice(6, 8);
    let wasteSub = subsectordata.slice(8, 10);
    let agricultureSub = subsectordata.slice(10, 17);
    let transport = subsectorfurtherdata.slice(0, 5);
    let eBuildings = subsectorfurtherdata.slice(5, 7);
    let eIndustry = subsectorfurtherdata.slice(7, 14);

    // Alla määritellään datat kaikkiin luotaviin datasetteihin
    const sector = {
        labels: sectorData.map(function (item) { return item.sectorname }),
        data: sectorData.map(function (item) { return item.emissions }),
        backgroundColor: [
            'rgb(178,34,34)',
            'rgb(255,140,0)',
            'rgb(85,107,47)',
            'rgb(107,142,35)',
        ],
        parsing: {
            key: "emissions"
        },
    }

    const energyData = {
        labels: energySub.map(function (item) { return item.sectorname }),
        data: energySub.map(function (item) { return item.emissions }),
        backgroundColor: [
            'rgb(178,34,34)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const industryData = {
        labels: industrySub.map(function (item) { return item.sectorname }),
        data: industrySub.map(function (item) { return item.emissions }),
        backgroundColor: [
            'rgb(255,140,0)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const wasteData = {
        labels: wasteSub.map(function (item) { return item.sectorname }),
        data: wasteSub.map(function (item) { return item.emissions }),
        backgroundColor: [
            'rgb(85,107,47)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const agricultureData = {
        labels: agricultureSub.map(function (item) { return item.sectorname }),
        data: agricultureSub.map(function (item) { return item.emissions }),
        backgroundColor: [
            'rgb(107,142,35)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const transportData = {
        labels: transport.map(function (item) { return item.sectorname }),
        data: transport.map(function (item) { return item.emissions }),
        backgroundColor: [
            'rgb(139,69,19)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const eBuildingsData = {
        labels: eBuildings.map(function (item) { return item.sectorname }),
        data: eBuildings.map(function (item) { return item.emissions }),
        backgroundColor: [
            'rgb(184,134,11)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const eIndustryData = {
        labels: eIndustry.map(function (item) { return item.sectorname }),
        data: eIndustry.map(function (item) { return item.emissions }),
        backgroundColor: [
            'rgb(210,105,30)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    // Lisää datasetin
    function addData(chart, data) {
        chart.data.datasets.push(data);
        chart.update();
    }

    // Poistaa ennen klikkausta näkyvän datasetin
    function removeData(chart) {
        chart.data.datasets.pop();
        chart.update();
    }

    function addLabels(value, context) {
        const text = context.dataset.labels[context.dataIndex];
        const numbers = context.dataset.data[context.dataIndex];
        return text + ': ' + numbers + '%';
        //return text + '\n' + numbers + '%';
    }

    // Funktio, joka ajetaan aina klikatessa
    const onClick = (event) => {

        const chart = chartRef.current;                             // Klikattu chartti
        const element = (getElementAtEvent(chart, event));          // Klikatun sektorin data muuttujaan
        const { index } = element[0];                               // Tallennetaan klikatun sektorin indeksi muuttujaan
        const datas = (getDatasetAtEvent(chart, event));            // Tallennetaan klikatun sektorin datasetti muuttujaan

        // If else, joka tarkistaa saadun datasetin taulukon pituuden 
        //ja klikatun sektorin indeksin ja lisää niiden perusteella uuden datasetin

        if (datas.length === 4 & index === 0) {
            removeData(chart);
            addData(chart, energyData);
        } else if (datas.length === 4 & index === 1) {
            removeData(chart);
            addData(chart, industryData);
        } else if (datas.length === 4 & index === 2) {
            removeData(chart);
            addData(chart, wasteData);
        } else if (datas.length === 4 & index === 3) {
            removeData(chart);
            addData(chart, agricultureData);
        } else if (datas.length === 6 & index === 0) {
            removeData(chart);
            addData(chart, transportData);
        } else if (datas.length === 6 & index === 1) {
            removeData(chart);
            addData(chart, eBuildingsData);
        } else if (datas.length === 6 & index === 2) {
            removeData(chart);
            addData(chart, eIndustryData);
        } else {
            //return;
            // Nämä jos laittaa, piirtää ensimmäisen chartin aina, kun klikatusta sektorista ei enempää dataa
            removeData(chart);
            addData(chart, sector);
        }

        console.log(element);
        console.log(datas);
    }

    // Data ensimmäisen donitsin piirtämiseen
    const data = {

        datasets: [
            {
                labels: sectorData.map(function (item) { return item.sectorname }),
                data: sectorData.map(function (item) { return item.emissions }),
                backgroundColor: [
                    'rgb(128,0,0)',
                    'rgb(255,140,0)',
                    'rgb(85,107,47)',
                    'rgb(107,142,35)',
                ],
                parsing: {
                    key: "emissions"
                },
                borderWidth: 3,
            },
        ],

    };
    const options = {
        plugins: {
            datalabels: {
                display: true,
                color: 'white',
                formatter: addLabels,
            }
        },
    }

    // Määritellään, mitä palautetaan sivulle.
    return (
        <div className="chart">
            <h2>V9 CO2 emissions by sectors</h2>
            <Doughnut
                ref={chartRef}
                data={data}
                plugins={[ChartDataLabels]}
                options={options}
                onClick={onClick}
            />
            <div>
                <p>The chart shows the breakdown of global greenhouse gas emissions in 2016. Nearly three-quarters of emissions come from energy use, almost one-fifth from agriculture and land use, and the remaining 8% from industry and waste. Energy use in industry, specifically the manufacturing of iron and steel, chemicals and petrochemicals, food and tobacco, non-ferrous metals, paper and pulp, and machinery, accounted for 24.2% of emissions. Road transport accounted for 11.9% and aviation for 2.5%. Agriculture, forestry and other land use accounted for 24.1%, with forestry responsible for 17.4% and agriculture responsible for 6.7%. The remaining 8% of emissions came from industrial processes, waste, and buildings.</p>
            </div>
            <p><b><a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector" target="_blank" rel="noopener noreferrer">Link to description</a></b></p>
            <p><b><a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx" target="_blank" rel="noopener noreferrer">Link to datasource</a></b></p>
        </div>
    );
}