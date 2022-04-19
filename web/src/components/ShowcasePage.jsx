import React, { useEffect, useState } from "react";
import VideoBox from "./VideoBox";

const ShowcasePage = () => {

    const [videos, setVideos] = useState([]);
    const [tags, setTags] = useState([]);

    // Get Videos
    useEffect(() => {
        (async () => {
            const url = process.env.REACT_APP_API_URL + '/videos';
            const response = await fetch(url);
            const results = await response.json();
            setVideos(results);
        })();
    }, []);

    // Get Tags
    useEffect(() => {
        (async () => {
            const url = process.env.REACT_APP_API_URL + '/tags';
            const response = await fetch(url);
            const results = await response.json();
            setTags(results);
        })();
    }, []);

    return (
        <>
            <div className="container sectionTopMargin">
                <div>
                </div>
                <div className="d-flex">
                    {videos.length > 0 ? (
                        videos.map((video) => <VideoBox key={video.id} video={video} />)
                    ) : (
                        <span>No hay resultados</span>
                    )}
                </div>
                <div className="d-flex flex-row">
                </div>
            </div>
        </>
    );
};

export default ShowcasePage;