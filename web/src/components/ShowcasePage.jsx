import React, { useEffect, useState } from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import VideoBox from "./VideoBox";

const ShowcasePage = () => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        (async () => {
            /*
            const url = process.env.REACT_APP_API_URL + "/videos/"
            const response = await fetch(url);
            const results = await response.json();
            setResults(results);
            */
        })();
    }, []);


    return (
        <>
            <div className="container sectionTopMargin">
                <div>
                    <Form.Control type="email" placeholder="Buscador" />
                </div>
                <div className="d-flex flex-row">
                    <VideoBox />
                    <VideoBox />
                    <VideoBox />
                    <VideoBox />
                </div>
                <div className="d-flex flex-row">
                    <VideoBox />
                    <VideoBox />
                    <VideoBox />
                    <VideoBox />                    
                </div>
            </div>
        </>
    );
};

export default ShowcasePage;