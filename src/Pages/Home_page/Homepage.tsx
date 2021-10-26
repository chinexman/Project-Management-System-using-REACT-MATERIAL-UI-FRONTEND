import React from "react";
import { Avatar } from "@material-ui/core";
import "./Homepage.css";
import Activity from "./ActivityComponents";
import Header from "../../components/Header";

const Homepage = () => {
  return (
    <>
      <Header signOut= 'signOut' header="Home" headerlinks={[]} />

      <div className="main_homepage">
        <div className="task_part">
          <div className="sub_header">
            <h1 className="subheader_text">Completed Tasks</h1>
            <h1 className="subheader_number">372</h1>
          </div>
          <div className="subheader_center">
            <div className="subheader_center-header">
              <h2>Today Tasks</h2>
              <button>+ Add Task</button>
            </div>
            <div className="subheader_center-firstlayer">
              <div className="first_layer">
                <input type="checkbox" />
                <p>
                  E-mail after registration so that i can confirm my address
                </p>
              </div>
              <div className="second_layer">
                <Avatar />
                <h3 id="text">DEVELOPMENT</h3>
              </div>
            </div>

            <div className="subheader_center-secondlayer">
              <div className="first1_layer">
                <input type="checkbox" />
                <p>Find top 5 customers and get reviews from them</p>
              </div>
              <div className="second1_layer">
                <Avatar />
                <h3 id="text1">MARKETING</h3>
              </div>
            </div>
          </div>

          <div className="subheader_end">
            <div className="subheader_end-header">
              <h2>Pending Tasks</h2>
            </div>

            <div className="subheader_footer">
              <div className="footer">
                <input type="checkbox" />
                <p>
                  E-mail after registration so that i can confirm my address
                </p>
              </div>
              <div className="development">
                <Avatar />
                <h3 id="dev_text">DEVELOPMENT</h3>
              </div>
            </div>

            <div className="subheader_footer1">
              <div className="footer1">
                <input type="checkbox" />
                <p>Find top 5 customers and get reviews from them</p>
              </div>
              <div className="marketing">
                <Avatar />
                <h3 id="mkt_text">MARKETING</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="activity_part">
          <Activity />
        </div>
      </div>
    </>
  );
};

export default Homepage;
// export default {}