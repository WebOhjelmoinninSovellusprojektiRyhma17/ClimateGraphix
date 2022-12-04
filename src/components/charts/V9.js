import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { getElementAtEvent, getDatasetAtEvent, Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";

export default function V9() {
    // Asettaa kaikkiin chartteihin labelit näkymään sektoreiden keskellä
    Chart.register(ChartDataLabels);
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


    // Slice pätkii tulevan datan pienempiin osiin, jotta datasta saadaan aina yksi uusi datasetti.
    // Mappauksella saadaan parsittua pelkät labelit saadusta datasta sekä pelkät prosentit, jotta saadaan ne labeleihin näkyviin

    let sectorLabels = sectorData.map(function (item) { return item.sectorname });
    let sectorEmissions = sectorData.map(function (item) { return item.emissions });

    let energySub = subsectordata.slice(0, 6);
    let energyLabels = energySub.map(function (item) { return item.sectorname });
    let energyEmissions = energySub.map(function (item) { return item.emissions });

    let industrySub = subsectordata.slice(6, 8);
    let industryLabels = industrySub.map(function (item) { return item.sectorname });
    let industryEmissions = industrySub.map(function (item) { return item.emissions });

    let wasteSub = subsectordata.slice(8, 10);
    let wasteLabels = wasteSub.map(function (item) { return item.sectorname });
    let wasteEmissions = wasteSub.map(function (item) { return item.emissions });

    let agricultureSub = subsectordata.slice(10, 17);
    let agricultureLabels = agricultureSub.map(function (item) { return item.sectorname });
    let agricultureEmissions = agricultureSub.map(function (item) { return item.emissions });

    let transport = subsectorfurtherdata.slice(0, 5);
    let transportLabels = transport.map(function (item) { return item.sectorname });
    let transportEmissions = transport.map(function (item) { return item.emissions });

    let eBuildings = subsectorfurtherdata.slice(5, 7);
    let eBuildingsLabels = eBuildings.map(function (item) { return item.sectorname });
    let eBuildingsEmissions = eBuildings.map(function (item) { return item.emissions });

    let eIndustry = subsectorfurtherdata.slice(7, 14);
    let eIndustryLabels = eIndustry.map(function (item) { return item.sectorname });
    let eIndustryEmissions = eIndustry.map(function (item) { return item.emissions });

    // Alla määritellään datat kaikkiin luotaviin datasetteihin
    const sector = {
        labels: sectorLabels,
        data: sectorEmissions,
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
        labels: energyLabels,
        data: energyEmissions,
        backgroundColor: [
            'rgb(178,34,34)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const industryData = {
        labels: industryLabels,
        data: industryEmissions,
        backgroundColor: [
            'rgb(255,140,0)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const wasteData = {
        labels: wasteLabels,
        data: wasteEmissions,
        backgroundColor: [
            'rgb(85,107,47)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const agricultureData = {
        labels: agricultureLabels,
        data: agricultureEmissions,
        backgroundColor: [
            'rgb(107,142,35)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const transportData = {
        labels: transportLabels,
        data: transportEmissions,
        backgroundColor: [
            'rgb(139,69,19)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const eBuildingsData = {
        labels: eBuildingsLabels,
        data: eBuildingsEmissions,
        backgroundColor: [
            'rgb(184,134,11)',
        ],
        parsing: {
            key: "emissions"
        }
    }

    const eIndustryData = {
        labels: eIndustryLabels,
        data: eIndustryEmissions,
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

    function addLabels (value, context) {
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
                labels: sectorLabels,
                data: sectorEmissions,
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
        <div className="V9">
            <h2>CO2 emissions by sectors</h2>
            <Doughnut
                ref={chartRef}
                data={data}
                options={options}
                onClick={onClick}
            />
            <a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector" target="_blank" >Description</a><br></br>
            <a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx" target="_blank" >Datasets</a>
        </div>
    );
}