import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http//localhost:3001/global'

function data() {
    const [tata, setTata] = useState("");

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                setTata(response.data)
            }).catch (error => {
                alert(error.response.data.error)
            })
    }, [])
}

function globalAnnual() {

    const data = {
        label: "",
        data: [tata].reverse(),
    }

}