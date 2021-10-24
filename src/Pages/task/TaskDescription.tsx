import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

export default function TaskDescription() {
  return (
    <>
      <Wrappers>
        <TaskWrapper>
          <TaskHeader>
            <div className="header">
              <h4 className="headerTitle">Find top 5 customer request</h4>
              <p className="headerText">
                Added by Kristin A. <span>Yesterday at 12.41pm</span>{" "}
              </p>
            </div>
            {/* <div className="rightIcons">
              <span>
                <i className="fas fa-check-square"></i>
              </span>{" "}
              <span>
                <i className="fas fa-ellipsis-h"></i>
              </span>
            </div> */}
          </TaskHeader>
          <Assigned>
            <div className="assignedInfo">
              <div className="assignedHeader">ASIGN TO</div>
              <div className="assignedDetail">
                <i className="far fa-laugh"></i>Linzell Bowman
              </div>
            </div>
            <div className="assignedInfo">
              <div className="assignedHeader">DUE ON</div>
              <div className="assignedDetail">Tue, Dec 25</div>
            </div>
            <div className="assignedInfo">
              <div className="assignedHeader">TAG</div>
              <div className="assignedTag">Marketing</div>
            </div>
            {/* <div className="assignedInfo">
              <div className="assignedHeader">Followers</div>
              <div className="assignedDetail">
                <span>
                  <i className="far fa-grin-hearts"></i>
                </span>
                <span>
                  <i className="far fa-grin-hearts"></i>
                </span>
                <span>
                  <i className="far fa-grin-hearts"></i>
                </span>
              </div>
            </div> */}
          </Assigned>
          <hr className="horizontalLine" />
          <Description>
            <h4 className="descriptionHeader">DESCRIPTION</h4>
            <p className="descriptionText">
              Task Descriptions are used during project planning, project
              execution and project control. During project planning the task
              descriptions are used for scope planning and creating estimates.
              During project execution the task description is used by those
              doing the activities to ensure they are doing the work correctly.
            </p>
            <div className="fileswrapper">
              <div className="files">
                <div className="filesIcon">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div className="filesdetails">
                  <p className="filesname">Redesign Brief 2019.pdf</p>
                  <p className="filessize">
                    159 KB
                    <span> Delete</span>
                  </p>
                </div>
              </div>
              <div className="files">
                <div className="filesIcon">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div className="filedestails">
                  <p className="filesname">Header.png</p>
                  <p className="filessize">
                    129 KB
                    <span> Delete</span>
                  </p>
                </div>
              </div>
            </div>
          </Description>
        </TaskWrapper>
        <hr className="horizontalLine" />
        <Discussions>
          <h3 className="discussionsHeader">DISCUSSIONS</h3>
          <div className="addComment">
            <div className="inputImage">
              <i className="far fa-grin-tongue-wink"></i>
            </div>
            <input
              placeholder="Add a comment"
              className="commentInput"
              type="text"
            />
          </div>

          <div className="addComment">
            <div className="avatar">
              <i className="fas fa-grin-stars"></i>
            </div>
            <div className="comments">
              <div className="commentHeader">
                <h6 className="commenter">
                  Helena Bauer,<span>Designer</span>
                </h6>
                <p>Yesterday at 12.37pm</p>
              </div>
              <div className="commentContent">
                During a project build, it is necessary to evaluate the product
                design and development against project requirements and outcomes
              </div>
            </div>
          </div>

          <div className="addComment">
            <div className="avatar">
              {/* <i className="fas fa-user-alt"></i> */}
              <i className="fas fa-grin-stars"></i>
            </div>
            <div className="comments">
              <div className="commentHeader">
                <h6 className="commenter">
                  Helena Bauer, <span>Designer</span>
                </h6>
                <p>Yesterday at 12.37pm</p>
              </div>
              <div className="commentContent">
                @Helena Software quality assurance activity in which one or
                several humans check a program mainly
              </div>
            </div>
          </div>
        </Discussions>
      </Wrappers>
    </>
  );
}

export const Wrappers = styled.main`
  margin-top: 5px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  background-color: #ffffff;
  padding-bottom: 50px;
  margin-left: 5px;
  /* margin-top: 140px; */
  .horizontalLine {
    border: 1px solid #ececec;
  }
`;
export const TaskWrapper = styled.main`
  width: 90%;
  margin: 0px auto;
  margin-bottom: 50px;
  height: 50%;
  background-color: #ffffff;
`;

export const TaskHeader = styled.header`
  display: flex;
  margin: 0px 0;
  align-items: center;
  justify-content: space-between;
  .headerTitle {
    font-size: 26px;
  }
  .headerText {
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
  }
  .header {
    margin: 20px 0;
  }
  .fa-check-square {
    font-size: 30px;
    margin-right: 12px;
    color: #eaeaea;
  }
  .fa-ellipsis-h {
    font-size: 30px;
    background-color: #eaeaea;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
  }
`;
export const Assigned = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  margin-bottom: 20px;
  .assignedHeader {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 7px;
  }
  .assignedTag {
    color: #764ced;
    background-color: #f5f0ff;
    font-size: 12px;
    font-weight: 700;
  }
  .fa-laugh {
    font-size: 20px;
    margin-right: 3px;
    color: red;
  }
  .fa-grin-hearts {
    font-size: 20px;
    margin-right: 3px;
    color: green;
  }
`;
export const Description = styled.main`
  margin: 20px 0;

  .descriptionHeader {
    margin: 20px 0;
  }
  .descriptionHeader {
    font-size: 16px;
    font-weight: 700;
  }
  .descriptionText {
    font-size: 16px;
    font-weight: 400px;
  }
  .fileswrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;

    .files {
      display: flex;
      align-items: center;
      width: 35%;

      .filesIcon {
        padding-right: 10px;
        font-size: 24px;
        color: #ff1000;
      }
      .filesname {
        font-size: 14px;
        font-weight: 700;
      }
      .filessize > span {
        color: #ff1000;
        font-size: 14px;
        font-weight: 700;
        font-style: normal;
      }
      .fa-file-pdf {
      }
    }
  }
`;
export const Discussions = styled.main`
  width: 90%;
  margin: 0px auto;

  height: 50%;
  background-color: #ffffff;
  .discussionsHeader {
    margin: 20px 0;
  }
  .avatar {
    width: 5%;
  }
  .addComment {
    display: flex;
    margin: 30px 0;
    align-items: center;
    width: 100%;
    .commentHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    .comments {
      background-color: #f7f6f3;
      width: 100%;
      padding: 10px 30px;
    }
    .fa-grin-stars {
      font-size: 48px;
      position: relative;
      left: 0px;
      color: blue;
    }
    .inputImage {
      width: 10%;
    }
    .fa-grin-tongue-wink {
      font-size: 48px;
      color: #764ced;
    }
  }
  .commenter {
    font-size: 16px;
    font-weight: 700;
  }
  .commenter > span {
    font-weight: 400;
  }
  .commentHeader > p {
    font-size: 12px;
  }
  .commentContent {
    font-size: 15px;
    font-weight: 400;
  }
  .commentInput {
    width: 90%;
    background: #eaeaea;
    height: 40px;
    border: none;
    padding-left: 20px;
  }
`;
