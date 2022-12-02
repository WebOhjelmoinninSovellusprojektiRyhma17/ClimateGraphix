import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { getElementAtEvent,getDatasetAtEvent, Doughnut } from "react-chartjs-2";
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
        console.log(sectorLabels);
    }, []);

    let energySub = subsectordata.slice(0, 6);
    let industrySub = subsectordata.slice(6, 8);
    let wasteSub = subsectordata.slice(8, 10);
    let agricultureSub = subsectordata.slice(10, 17);

    let transport = subsectorfurtherdata.slice(0, 5);
    let eBuildings = subsectorfurtherdata.slice(5, 7);
    let eIndustry = subsectorfurtherdata.slice(7, 14);

    let sectorLabels = sectorData.map(function (item) {
        return item.sectorname;
    })

    let subLabels = subsectordata.map(function (item) {
        return item.sectorname;
    })

    let furtherLabels = subsectorfurtherdata.map(function (item) {
        return item.sectorname;
    })


    // Ensimmäinen donitsi
    const data = {
        //labels: sectorLabels,
        datasets: [
            {
                data: sectorData,
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
                options: {
                    responsive: true,
                    redraw: true,
                    plugins: {
                        datalabels: {
                            labels: {
                                index: {
                                    color: '#404040',
                                    font: {
                                        size: 18
                                    },

                                }
                            }
                        }
                    },
                },
                borderWidth: 3,
            },
        ],
    };

    const options = {
        options: {
            responsive: true,
        }
    }

    const sector = {
        data: sectorData,
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
        data: energySub,
        backgroundColor: 'rgb(102,0,0)',
        parsing: {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    const industryData = {
        data: industrySub,
        backgroundColor: 'rgb(152,251,152)',
        parsing: {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    const wasteData = {
        data: wasteSub,
        backgroundColor: 'rgb(64,224,208)',
        parsing: {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    const agricultureData = {
        data: agricultureSub,
        backgroundColor: 'rgb(255,182,193)',
        parsing: {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    const transportData = {
        data: transport,
        backgroundColor: 'rgb(102,0,0)',
        parsing: {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    const eBuildingsData = {
        data: eBuildings,
        backgroundColor: 'rgb(102,0,0)',
        parsing: {
            key: "Share of global greenhouse gas emissions (%)"
        }
    }

    const eIndustryData = {
        data: eIndustry,
        backgroundColor: 'rgb(102,0,0)',
        parsing: {
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
        } else if(datas.length === 4 & index === 1) {
            removeData(chart);
            addData(chart, industryData);
        } else if(datas.length === 4 & index === 2) {
            removeData(chart);
            addData(chart, wasteData);
        } else if(datas.length === 4 & index === 3) {
            removeData(chart);
            addData(chart, agricultureData);
        } else if(datas.length === 6 & index === 0) {
            removeData(chart);
            addData(chart, transportData);
        } else if(datas.length === 6 & index === 1) {
            removeData(chart);
            addData(chart, eBuildingsData);
        } else if(datas.length === 6 & index === 2) {
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
                options={options}
                onClick={onClick}
            />
        </div>
    );
}