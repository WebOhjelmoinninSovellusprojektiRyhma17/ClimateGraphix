import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { getElementAtEvent, getDatasetAtEvent, Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
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

    Chart.register(ChartDataLabels);

    Chart.defaults.set('plugins.datalabels', {
        color: 'white',
        formatter: function(value, context) {
            return context.dataset.labels[context.dataIndex];
          }
    });

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
        console.log(sectorLabels);
    }, []);

    let sectorLabels = sectorData.map(function (item) { return item.sectorname });
    let sectorEmissions = sectorData.map(function (item){ return item.emissions});

    let energySub = subsectordata.slice(0, 6);
    let energyLabels = energySub.map(function (item) { return item.sectorname });
    let energyEmissions = energySub.map(function (item){ return item.emissions});

    let industrySub = subsectordata.slice(6, 8);
    let industryLabels = industrySub.map(function(item) { return item.sectorname});
    let industryEmissions = industrySub.map(function (item){ return item.emissions});

    let wasteSub = subsectordata.slice(8, 10);
    let wasteLabels = wasteSub.map(function(item) { return item.sectorname});
    let wasteEmissions = wasteSub.map(function (item){ return item.emissions});

    let agricultureSub = subsectordata.slice(10, 17);
    let agricultureLabels = agricultureSub.map(function(item) { return item.sectorname});
    let agricultureEmissions = agricultureSub.map(function (item){ return item.emissions});

    let transport = subsectorfurtherdata.slice(0, 5);
    let transportLabels = transport.map(function(item) { return item.sectorname});
    let transportEmissions = transport.map(function (item){ return item.emissions});

    let eBuildings = subsectorfurtherdata.slice(5, 7);
    let eBuildingsLabels = eBuildings.map(function(item) { return item.sectorname});
    let eBuildingsEmissions = eBuildings.map(function (item){ return item.emissions});

    let eIndustry = subsectorfurtherdata.slice(7, 14);
    let eIndustryLabels = eIndustry.map(function(item) { return item.sectorname});
    let eIndustryEmissions = eIndustry.map(function (item){ return item.emissions});

    // Ensimmäinen donitsi
    const data = {
        datasets: [
            {
                labels: sectorLabels,
                data: sectorEmissions,
                //borderColor: "rgb(255,182,193)",
                backgroundColor: [
                    'rgb(102,0,0)',
                    'rgb(152,251,152)',
                    'rgb(64,224,208)',
                    'rgb(255,182,193)',
                ],
                parsing: {
                    key: "emissions"
                },
                borderWidth: 3,
            },
        ],
        options: {
            responsive: true,
            redraw: true,
        }
    };

    const sector = {
        labels: sectorLabels,
        data: sectorEmissions,
        backgroundColor: [
            'rgb(102,0,0)',
            'rgb(152,251,152)',
            'rgb(64,224,208)',
            'rgb(255,182,193)',
        ],

        parsing: {
            key: "emissions"
        },
    }

    const energyData = {
        labels: energyLabels,
        data: energyEmissions,
        backgroundColor: 'rgb(102,0,0)',
        parsing: {
            key: "emissions"
        }
    }

    const industryData = {
        labels: industryLabels,
        data: industryEmissions,
        backgroundColor: 'rgb(152,251,152)',
        parsing: {
            key: "emissions"
        }
    }

    const wasteData = {
        labels: wasteLabels,
        data: wasteEmissions,
        backgroundColor: 'rgb(64,224,208)',
        parsing: {
            key: "emissions"
        }
    }

    const agricultureData = {
        labels: agricultureLabels,
        data: agricultureEmissions,
        backgroundColor: 'rgb(255,182,193)',
        parsing: {
            key: "emissions"
        }
    }

    const transportData = {
        labels: transportLabels,
        data: transportEmissions,
        backgroundColor: 'rgb(102,0,0)',
        parsing: {
            key: "emissions"
        }
    }

    const eBuildingsData = {
        labels: eBuildingsLabels,
        data: eBuildingsEmissions,
        backgroundColor: 'rgb(102,0,0)',
        parsing: {
            key: "emissions"
        }
    }

    const eIndustryData = {
        labels: eIndustryLabels,
        data: eIndustryEmissions,
        backgroundColor: 'rgb(102,0,0)',
        parsing: {
            key: "emissions"
        }
    }

    // Lisää datasetin
    function addData(chart, data) {
        chart.data.datasets.push(data);
        chart.update();
    }

    // Poistaa nykyisen chartin
    function removeData(chart) {
        chart.data.datasets.pop();
        //chart.data.labels.pop();
        chart.update();
    }


    // Funktio, joka ajetaan aina klikatessa
    const onClick = (event) => {

        const chart = chartRef.current;                             // Klikattu chartti
        const element = (getElementAtEvent(chart, event));          // Klikatun sektorin data muuttujaan
        const { index } = element[0];                 // Eritellään indeksi ja datasetin indeksi sektorista
        const datas = (getDatasetAtEvent(chart, event));

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
            removeData(chart);
            addData(chart, sector);
        }

        console.log(element);
        console.log(datas);
    }

    // Määritellään, mitä palautetaan.
    return (
        <div className="V9">
            <h2>CO2 emissions by sectors</h2>
            <Doughnut
                ref={chartRef}
                data={data}
                onClick={onClick}
            />
        </div>
    );
}