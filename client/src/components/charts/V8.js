import React, { useEffect } from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { useState } from "react";
import axios from "axios";
import autocolors from 'chartjs-plugin-autocolors';

export default function V8() {
    const [Co, setCo] = useState("");

    const URL = 'http://localhost:3001/'

    // Hakee tiedot tietokannasta
    const getCoData = () => {
        axios.get(`${URL}NationalCo2`)
            .then((response) => {
                setCo(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
    }

    // Kutsuu funktiota aina, kun sivu ladataan
    useEffect(() => {
        getCoData();
    }, []);

    const data = {
        datasets: [
            {
                label: "Afganistan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Afganistan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Albania",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Albania",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Andorra",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Andorra",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Angola",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Angola",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Anguilla",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Anguilla",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Antigua and Barbuda",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Antigua and Barbuda",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Argentina",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Argentina",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Armenia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Armenia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Aruba",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Aruba",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Australia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Australia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Austria",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Austria",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Azerbaijan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Azerbaijan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Bahamas",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Bahamas",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Bahrain",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Bahrain",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Bangladesh",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Bangladesh",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Barbados",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Barbados",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Belarus",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Belarus",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Belgium",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Belgium",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Belize",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Belize",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Benin",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Benin",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Bermuda",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Bermuda",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Bhutan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Bhutan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Bonaire, Saint Eustatius and Saba",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Bonaire, Saint Eustatius and Saba",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Bosnia and Herzegovina",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Bosnia and Herzegovina",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Botswana",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Botswana",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Brazil",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Brazil",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "British Virgin Islands",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "British Virgin Islands",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Brunei Darussalam",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Brunei Darussalam",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Bulgaria",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Bulgaria",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Burkina Faso",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Burkina Faso",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Burundi",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Burundi",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Cambodia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Cambodia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Canada",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Canada",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Cape Verde",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Cape verde",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Central African Republic",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Central African Republic",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Chad",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Chad",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Chile",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Chile",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "China",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "China",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Colombia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Colombia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Comoros",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Comoros",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Congo",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "COngo",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Cook Island",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Cook Island",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Costa Rica",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Costa Rica",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Cote dlvoire",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Cote dlvoire",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Croatia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Croatia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Cuba",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Cuba",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Curacao",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Curacao",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Cyprus",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Cyprus",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Czech Republic",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Czech Republic",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "North Korea",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "North Korea",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Democratic Republic of the Congo",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Democratic Republic of the Congo",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Denmark",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Denmark",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Djibouti",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Djibouti",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Dominica",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Dominica",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Dominican Republic",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Dominican Republic",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Ecuador",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Ecuador",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Egypt",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Egypt",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "El Salvador",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "El Salvador",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Equatorial Guinea",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Equatorial Guinea",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Equator",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Equator",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Estonia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Estonia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Ethiopia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Ethiopia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Faeroe Islands",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Faeroe Islands",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Micronesia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Micronesia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Fiji",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Fiji",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Finland",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Finland",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "France",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "France",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "French Guiana",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "French Guiana",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "French Polynesia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "French Polynesia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Gabon",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Gabon",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Gambia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Gambia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Georgia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Georgia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Germany",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Germany",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Ghana",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Gahana",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Greece",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Greece",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Greenland",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Greenland",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Grenada",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Greanada",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Guadeloupe",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Guadeloupe",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Guatemala",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Guatemala",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Guinea",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Guinea",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Guinea-Bissau",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Guinea-Bissau",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Guyana",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Guyana",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Haiti",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Haiti",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Honduras",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Honduras",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Hong Kong",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Hong Kong",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Hungary",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Hungary",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Iceland",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Iceland",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "India",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "India",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Indonesia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Indonesia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Iraq",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Iraq",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Ireland",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Ireland",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Iran",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Iran",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Israel",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Israel",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Italy",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Italy",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Jamaica",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Jamaica",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Japan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Japan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Jordan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Jordan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Kazakhstan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Kazakhstan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Kenya",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Kenya",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Kiribati",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Kiribati",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Kosovo",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Kosovo",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Kuwait",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Kuwait",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Kyrgyzstan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Kyrgyzstan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Laos",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Laos",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Latvia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Latvia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Lebanon",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Lebanon",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Lesotho",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Lesotho",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Liberia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Liberia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Libya",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Latvia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Libya",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Latvia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Liechtenstein",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Liechtenstein",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Lithuania",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Lithuania",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Luxembourg",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Luxembourg",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Macao",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Macao",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "North Macedonia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "North Macedonia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Madagascar",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Madagascar",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Malawi",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Malawi",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Malaysia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Malaysia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Maldives",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Maldives",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Mali",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Mali",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Malta",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Malta",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Marshall Islands",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Marshall Islands",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Martinique",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Martinique",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Mauritania",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Mauritania",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Mauritius",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Mauritius",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Latvia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Latvia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Mayotte",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Mayotte",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Mexico",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Mexico",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Mongolia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Mongolia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Montenegro",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Montenegro",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Montserrat",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Montserrat",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Morocco",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Morocco",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Mozambique",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Mozambique",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Myanmar",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Myanmar",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Namibia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Namibia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Nauru",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Nauru",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Nepal",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Nepal",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Netherlands",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Netherlands",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "New Caledonia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "New Caledonia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "New Zealand",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "New Zealand",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Nicaragua",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Nicaragua",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Niger",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Niger",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Nigeria",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Nigeria",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Niue",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Niue",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Norway",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Norway",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Occupied Palestinian Territory",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Occupied Palestinian Territory",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Oman",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Oman",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Pakistan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Pakistan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Palau",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Palau",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Panama",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Panama",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Papua New Guinea",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Papua New Guinea",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Paraguay",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Paraguay",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Peru",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Peru",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Philippines",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Philippines",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Bolivia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Bolivia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Poland",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Poland",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Portugal",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Portugal",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Qatar",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Qatar",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Cameroon",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Cameroon",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "South Korea",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "South Korea",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Moldova",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Moldova",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "South Sudan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "South Sudan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Sudan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Sudan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Réunion",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Réunion",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Romania",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Romania",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Russian Federation",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Russian Federation",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Rwanda",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Rwanda",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Saint Helena",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Saint Helena",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Saint Lucia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Saint Lucia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Sint Maarten (Dutch part)",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Sint Maarten (Dutch part)",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Samoa",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Samoa",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Sao Tome and Principe",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Sao Tome and Principe",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Saudi Arabia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Saudi Arabia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Senegal",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Senegal",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Serbia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Serbia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Seychelles",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Seychelles",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Sierra Leone",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Sierra Leone",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Singapore",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Singapore",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Slovakia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Slovakia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Slovenia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Slovenia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Solomon Islands",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Solomon Islands",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Somalia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Somalia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "South Africa",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "South Africa",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Spain",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Spain",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Sri Lanka",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Sri Lanka",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Sri Saint Kitts and Nevis",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Sri Saint Kitts and Nevis",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Saint Pierre and Miquelon",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Saint Pierre and Miquelon",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Saint Vincent and the Grenadines",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Saint Vincent and the Grenadines",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Suriname",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Suriname",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Swaziland",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Swaziland",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Sweden",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Sweden",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Switzerland",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Switzerland",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Syria",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Syria",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Taiwan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Taiwan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Tajikistan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Tajikistan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Thailand",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Thailand",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Timor-Leste",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Timor-Leste",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Togo",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Togo",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Tonga",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Tonga",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Trinidad and Tobago",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Trinidad and Tobago",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Tunisia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Tunisia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Turkey",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Turkey",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Turkmenistan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Turkmenistan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Turks and Caicos Islands",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Turks and Caicos Islands",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Tuvalu",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Tuvalu",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Uganda",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Uganda",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Ukraine",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Ukraine",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "United Arab Emirates",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "United Arab Emirates",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "United Kingdom",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "United Kingdom",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Tanzania",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Tanzania",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "USA",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "USA",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Uruguay",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Uruguay",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Uzbekistan",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Uzbekistan",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Vanuatu",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Vanuatu",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Venezuela",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Venezuela",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Viet Nam",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Viet Nam",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Wallis and Futuna Islands",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Wallis and Futuna Islands",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Yemen",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Yemen",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Zambia",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Zambia",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
            {
                label: "Zimbabwe",
                data: Co,                                       // tilamuuttuja, johon data on tallennettu tietokannasta
                parsing: {
                    xAxisKey: "Date",                           // x-akselin muuttuja tietokannassa
                    yAxisKey: "Zimbabwe",                        // y-akselin muuttuja tietokannassa
                },
                pointRadius: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            plugins: {
                autocolors: {
                    mode: 'dataset'
                }
            }
        },
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "year"
                }
            },
            y: {
                stacked: true,
                position: "right",
                title: {
                    display: true,
                    align: 'center',
                    text: "MtCO2/year"
                }

            },
        },
    };

    return (
        <div className="chart" >
            <h2>V8 Co2 emissions by country</h2>
            <Line options={options} plugins={[autocolors]} data={data} />
            <div>
                <p>This graph shows the carbon dioxide emissions by countries from 1959 to 2020 .</p>
            </div>
                <p><b><a href="https://essd.copernicus.org/articles/14/1917/2022/" target="_blank" rel="noopener noreferrer" >Link to description</a></b></p>
                <p><b><a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D" target="_blank" rel="noopener noreferrer" >Link to datasource</a></b></p>
        </div>
    );
}
