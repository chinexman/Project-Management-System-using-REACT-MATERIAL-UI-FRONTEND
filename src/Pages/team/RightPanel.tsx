import React, { useState, useEffect, FC } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Text from "../images/img.jpeg";
// import imgUrl from "../../Images/img.jpeg";
import Image from "../../Assets/Circle.svg";

const RightPanel: FC<{ name: String; jobtitle: String }> = ({
  name,
  jobtitle,
}) => {
  const imgUrl = "/../../Images/img.jpeg";
  console.log(imgUrl, "imgUrl");
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5 * 1000);
  // }, [name, jobtitle]);
  return loading ? (
    <h1 className="load">Loading data, please wait...</h1>
  ) : (
    <>
      <div className="container-right">
        {/* <div className="profiles_header"> */}

        <div className="profiles">
          <div className="img_container">
            <img src={imgUrl} alt="" className="image_url" />
          </div>
          <div className="profileSmallwrap">
            <div className="personalDetails">
              <h1 className="profile_name">{name}</h1>
              <h4 className="job_title">{jobtitle}</h4>
              <p className="country">Nigeria</p>
            </div>
            <p className="right_side_dots">
              <img src={Image} alt="option icon" />
            </p>
          </div>
        </div>
        <hr />
        <div className="taskleveldiagram">
          <div className="close_task">
            <p>
              <span>719</span>
            </p>
            <p>close task</p>
          </div>
          {/* <div className="blue_diagram">blue diagram</div> */}
          <div className="open_task">
            <p>
              <span>13</span>
            </p>
            <p>open task</p>
          </div>
          {/* <div className="green_diagram">green diagram</div> */}
        </div>

        <hr />

        <div className="assignedTask">
          <div className="task_assign_no">
            <h4 className="profile_view">
              {" "}
              Assigned Task <span>2</span>
            </h4>
          </div>
          <div className="design">
            <p className="icon">
              <input type="checkbox" />
            </p>
            <div className="text">
              <p className="assignedtext">
                An option to search in current projects or in all projects
              </p>
              <p className="designtage">DESIGN</p>
            </div>
          </div>

          <div className="design">
            <p className="icon">
              <input type="checkbox" />
            </p>
            <div className="text">
              <p className="assignedtext">Listing on product hunt</p>
              <p className="designtage">DESIGN</p>
            </div>
          </div>
        </div>

        <hr />
        <h5>Last Activity</h5>
        <div className="lastactivitywrapper">
          <div className="lastactivity">
            <div className="lastactivityicon">
              <i className="fas fa-upload"></i>
            </div>
            <div className="lastactivitydata">
              <p className="lastactivitytext">
                <strong>Davea Butler</strong> uploaded 3 files on{" "}
                <strong>
                  An option to search in current projects or in all projects
                </strong>
              </p>
              <div className="lastactivitydate">
                <p className="lastactivitydatemonth">20 nov</p>
                <p className="lastactivitydatemonth">6:02pm</p>
              </div>
            </div>
          </div>
          <div className="lastactivityimages">
            <div className="LA_img_container">
              <img src={imgUrl} alt="" className="ji" />
            </div>
            <div className="LA_img_container">
              <img src={imgUrl} alt="" className="ji" />
            </div>
            <div className="LA_img_container">
              <img src={imgUrl} alt="" className="ji" />
            </div>
          </div>
          <div className="lastactivity">
            <div className="lastactivityicon">
              <i className="far fa-check-circle"></i>
            </div>
            <div className="lastactivitydata">
              <p className="lastactivitytext">
                <strong>Davea Butler</strong> mark as done{" "}
                <strong>
                  Listing on product Hunt so we can reach as many potential
                  users
                </strong>
              </p>
              <div className="lastactivitydate">
                <p className="lastactivitydatemonth">17 nov</p>
                <p className="lastactivitydatemonth">5:49pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
