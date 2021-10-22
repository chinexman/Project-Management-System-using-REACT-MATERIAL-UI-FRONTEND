import React, { FC } from "react";
import People from "./people";
import Avatar from "@mui/material/Avatar";

const LeftPanel: FC<{ setDetail: Function }> = ({ setDetail }) => {
  return (
    <div className="container-left">
      <div className="header_nav">
        <header>Members</header>
        <p className="counter">{People.length}</p>
      </div>

      {People.map((el, index) => (
        <div key={index} onClick={(e) => setDetail(el.name, el.jobTitle)}>
          {/* Avatar={<Avatar>{el.name[0].toUpperCase()}</Avatar>} */}
          <div className="leftsidecontainer">
            {/* <div className="avatar">{el.image}</div> */}
            <Avatar alt="Remy Sharp" src={el.image} />
            <div className="profile_desc">
              <div id="user_name">{el.name}</div>
              <div className="job_title">{el.jobTitle}</div>
            </div>
            <div className="taskNumber">
              <div className="taskNum">{`${el.task}`}</div>
              <div className="tasks">TASKS</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default LeftPanel;
