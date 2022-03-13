import React, {useState} from 'react';
import './App.css';
import TextBox from './TextBox';
import axios from 'axios';
// @ts-ignore
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {

        const toSend = {
            sun: sun,
            moon: moon,
            rising: rising
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }

        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then(response => {
                console.log(response.data);
                setHoroscope(response.data["horoscope"]);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Horoscope</h1>
            <TextBox label={"Enter Sun Sign"} change={setSun}/>
            <TextBox label={"Enter Moon Sign"} change={setMoon}/>
            <TextBox label={"Enter Rising Sign"} change={setRising}/>
            <AwesomeButton onPress={requestHoroscope}>Submit</AwesomeButton>
            {horoscope.map(trait => <p>{trait}</p>)}
        </div>
    );
}

export default Horoscope;
