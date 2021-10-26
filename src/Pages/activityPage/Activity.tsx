// import React, { useState, useEffect, useContext } from "react";
// import styled from "styled-components";
// import Header from "../../components/Header";
// import "./activity.css";
// import { activityArr, activityArr2 } from "./data";
// const Activity = () => {
//   return (
//     <>
//       <Header
//       signOut="signOut"
//         header="File"
//         headerlinks={[
//           { name: "Task", link: "/task" },
//           { name: "Kanban", link: "/kanban" },
//           { name: "Activity", link: "/activity" },
//           { name: "Calendar", link: "/calendar" },
//           { name: "Files", link: "/file" },
//         ]}
//       />
//       <Wrapper>
//         <h1 className="day">Today</h1>
//         {activityArr.map((activity) => {
//           const { icon, text, time, profilePic, comment, photos } = activity;
//           return (
//             <div className="activity">
//               <div className="description">
//                 <div
//                   className="icon-container"
//                   style={{ backgroundColor: icon.color }}
//                 >
//                   <img className="img" src={icon.image} alt="icon" />
//                 </div>
//                 <p className="activityText">{text}</p>
//                 <p className="time">{time}</p>
//               </div>
//               {comment && (
//                 <div className="comment">
//                   <img className="profile-img" src={profilePic} alt="icon" />
//                   <p className="profile-comment">{comment}</p>
//                 </div>
//               )}
//               <div className="photos">
//                 {photos &&
//                   photos.map((pic: any) => {
//                     return (
//                       <>
//                         <img className="picture" src={pic} alt="icon" />
//                       </>
//                     );
//                   })}
//               </div>
//             </div>
//           );
//         })}
//         <h1 className="day">Yesterday</h1>
//         {activityArr2.map((activity) => {
//           const { icon, text, time, photos } = activity;
//           return (
//             <div className="activity">
//               <div className="description">
//                 <div
//                   className="icon-container"
//                   style={{ backgroundColor: icon.color }}
//                 >
//                   <img className="img" src={icon.image} alt="icon" />
//                 </div>
//                 <p className="activityText">{text}</p>
//                 <p className="time">{time}</p>
//               </div>
//               <div className="photos">
//                 {photos &&
//                   photos.map((pic: any) => {
//                     return (
//                       <>
//                         <img className="picture" src={pic} alt="icon" />
//                       </>
//                     );
//                   })}
//               </div>
//             </div>
//           );
//         })}
//       </Wrapper>
//     </>
//   );
// };
// export default Activity;
// const Wrapper = styled.div`
//   /* width: 800px; */
//   width: 50%;
//   background-color: #ffffff;
//   margin: 0 auto;
//   margin-top: 30px;
//   padding: 20px;
//   border-radius: 10px;
//   .activity {
//     display: flex;
//     flex-direction: column;
//   }
//   .description {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 20px;
//   }
//   .icon-container {
//     padding: 20px;
//     /* background-color: #CEF9C6; */
//     border-radius: 50px;
//   }
//   .comment {
//     display: flex;
//     width: 70%;
//     margin-left: auto;
//     margin-right: auto;
//     background-color: #f7f6f3;
//     padding: 30px 30px 30px 40px;
//     border-radius: 10px;
//     position: relative;
//     /* padding-left: -10px; */
//   }
//   .profile-img {
//     position: absolute;
//     left: -20px;
//     top: 15px;
//   }
//   .photos {
//     display: flex;
//     margin-left: 20px;
//     /* width: 100px;
//         height: 100px; */
//     /* flex-direction: row; */
//   }
//   .picture {
//     padding: 5px;
//   }
//   .day {
//     margin-bottom: 30px;
//     margin-top: 20px;
//     opacity: 50%;
//   }
//   .activityText {
//     width: 65%;
//     /* margin-left: 20px; */
//     /* padding:10px */
//   }
//   .time {
//   }
// `;
