import React from "react";
import styled from "styled-components";
import axios from "axios";
import { authContext } from "../../Utils/Authcontext";
import { ActivitiesArray } from "./Activity-data";

const Activity = () => {
  console.log(ActivitiesArray[2]);
  return (
    <>
      <Wrapper>
        <h2 className="activity-header">Activity</h2>
        <p className="day">Today</p>
        {ActivitiesArray.map((activity) => {
          const { icon, text, time, files } = activity;
          return (
            <div className="activity">
              {/* <p className="activity-icon">{icon}</p> */}
              <div className="icon-class">
                <img className="activity-icon" src={icon} alt="icon" />
                <div className="timeline"></div>
              </div>

              <div className="textAndTime">
                <p className="activity-text">{text}</p>
                <p className="activity-time">{time}</p>
                <div className="file-style">
                  {files?.map((file) => {
                    return (
                      <img className="file-upload" src={file} alt="File" />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Activity;

const Wrapper = styled.div`
  flex: 0.2;
  background-color: #ffffff;
  padding: 30px 25px; ///to start with

  .activity-header {
    font-style: bold;
    margin-bottom: 25px;
  }

  .day {
    color: #808080;
  }

  .activity {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 15px;
    margin-bottom: 15px;
    /* position: relative; */
  }

  .activity-icon {
    background-color: #cef9c6;
    padding: 15px;
    border-radius: 50%;
    margin-right: 30px;
    /* position: absolute;
        top: 0;
        left: 0; */
    z-index: 10;
  }

  .activity-text {
    margin-bottom: 10px;
  }
  .icon-class {
    display: flex;
    position: relative;
  }

  .timeline {
    height: 40vh;
    /* color: #808080; */
    border-left: 1px solid lightgray;
    position: absolute;
    left: 28%;
  }

  .activity-time {
    color: #808080;
    margin-bottom: 25px;
  }

  .file-style {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  .file-upload {
    width: 45px;
    height: 45px;
    border-radius: 5px;
  }
`;

// .fcqRjv .icon-class {
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
// }

// .dmipuN .timeline {
//     height: 27vh;
//     border-left: 1px solid lightgray;
//     position: absolute;
//     left: 21px;
//     z-index: 0;
// }
