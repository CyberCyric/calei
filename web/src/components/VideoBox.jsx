import React from "react";
import { BiComment, BiEdit } from "react-icons/bi";
import {Badge} from "react-bootstrap";

const VideoBox = ({video}) => {
    return (
        <div className="video-box-container col-3 col-xs-12 pb-3">
            <img src={"http://img.youtube.com/vi/"+ video.video_code + "/mqdefault.jpg"} alt="" />
            <div className="">
                <h6 className="performer-name"><b>{video.performer.name}</b></h6>
                <h5 className="video-title">
                    <b>{video.title}</b><span className="ms-2">{/*<BiEdit/>*/}</span>
                </h5>
                <div className="d-flex">
                    {video.tags.length > 0 ? (
                        video.tags.map((tag) => <Badge bg="secondary" className="ms-2 video-box-tag">{tag.name}</Badge>)
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="float-end me-3">
                    <BiComment/>5
                </div>
            </div>
        </div>
    );
};

export default VideoBox;