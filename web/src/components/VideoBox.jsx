import React from "react";
import { BiComment, BiEdit } from "react-icons/bi";

const VideoBox = ({video}) => {
    return (
        <div className="video-box-container">
            <img src={"http://img.youtube.com/vi/"+ video.video_code + "/mqdefault.jpg"} alt="" />
            <div className="">
                <h6 className="performer-name"><b>{video.performer.name}</b></h6>
                <h5 className="video-title">
                    <b>{video.title}</b><span className="ms-2"><BiEdit/></span></h5>
                <div className="float-end me-3">
                    <BiComment/>5
                </div>
            </div>
        </div>
    );
};

export default VideoBox;