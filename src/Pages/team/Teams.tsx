import React, { Fragment, useState, useEffect } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
// import "../index.css";
import Home from "../Home/Home";
import Header from "../../components/Header";
import "./teamstyles.css";

const Teams = () => {
  const [name, setname] = useState("");
  const [jobtitle, setjobtitle] = useState("");

  function setDetail(name: string, job: string) {
    setname(name);
    setjobtitle(job);
  }

  const headerlinks = [
    {
      name: "",
      link: "",
    },
  ];

  return (
    <>
      <div className="headerWrapper">
        <Header header="Designers" headerlinks={headerlinks} />
      </div>
      <div className="wrapper">
        <div className="container">
          <LeftPanel setDetail={setDetail} />
          <RightPanel name={name} jobtitle={jobtitle} />
        </div>
      </div>
    </>
  );
};

export default Teams;
