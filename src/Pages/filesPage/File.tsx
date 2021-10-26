import React, { useContext, useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { AiFillFile } from "react-icons/ai";
import { authContext } from "../../Utils/Authcontext";
import Header from "../../components/Header";
import Home from "../Home/Home";
import Image from "@material-ui/icons/Person";
import "./file.css";
// import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";

export interface IState {
  Files: any[];
}

let files = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    image: Image,
    name: "redesign brief",
    size: "150kb",
    UploadBy: "chinedu",
    Tag: "MARKETING",
    Date: "08 Oct 2021",
    delete: "action",
    download: "yes",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image: Image,
    name: "All files",
    size: "19kb",
    UploadBy: "kayode",
    Tag: "DESIGN",
    Date: "16 Oct 2021",
    delete: "action",
    download: "yes",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    image: Image,
    name: "chinex cv",
    size: "30kb",
    UploadBy: "ovie",
    Tag: "DEVELOPMENT",
    Date: "15 Oct 2021",
    delete: "action",
    download: "yes",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image: Image,
    name: "Learn react by codecademy",
    size: "49kb",
    UploadBy: "Jenny",
    Tag: "FRONTEND DESIGN",
    Date: "21 ct 2021",
    delete: "action",
    download: "yes",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image: Image,
    name: "Advance JavaScript ",
    size: "19kb",
    UploadBy: "Muazu",
    Tag: "BACKEND DESIGN",
    Date: "14 Oct 2021",
    delete: "action",
    download: "yes",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image: Image,
    name: "Aws for Dev Op",
    size: "40kb",
    UploadBy: "Chinedu",
    Tag: "CI/CD",
    Date: "19 Oct 2021",
    delete: "action",
    download: "yes",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image: Image,
    name: "Master Node.js",
    size: "34kb",
    UploadBy: "Jahswil",
    Tag: "REACT DEVELOPMENT",
    Date: "18 Oct 2021",
    delete: "action",
    download: "yes",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image: Image,
    name: "Learn Redux Scrimba",
    size: "57kb",
    UploadBy: "kayode",
    Tag: "QUALITY ASSURANCE",
    Date: "20 Oct 2021",
    delete: "action",
    download: "yes",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image: Image,
    name: "Learn Nodejs mosh",
    size: "80kb",
    UploadBy: "Jenny",
    Tag: "DESIGN",
    Date: "21 Oct 2021",
    delete: "action",
    download: "yes",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image: Image,
    name: "Agile Leadership",
    size: "300kb",
    UploadBy: "Jahswill",
    Tag: "FRONTEND",
    Date: "21 Oct 2021",
    delete: "action",
    download: "yes",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    image: Image,
    name: "master Algorithm in JavaScript",
    size: "59kb",
    UploadBy: "Ovie",
    Tag: "DESIGN",
    Date: "21 Oct 2021",
    delete: "action",
    download: "yes",
  },
];
let columns = [
  { path: "image", label: "image" },
  { path: "name", label: "name" },

  { path: "size", label: "size" },

  { path: "UploadBy", label: "Upload By" },
  { path: "Tag", label: "Tag" },
  { path: "Date", label: "Date" },
  { key: "action", label: "" },
  { key: "delete", label: "" },
];

export default function File() {
  const [Files, setFiles] = useState<{ [key: string]: any }>([]);
  // const [onlineFiles, setonlineFiles]= useState([]);

  const { token } = useContext(authContext);

  useEffect(() => {
    axios
      .request({
        url: "https://kojjac.herokuapp.com/tasks/allFiles/61721457b22adb3e31445534",

        // url: "https://kojjac.herokuapp.com/tasks/allFiles",

        method: "get",

        headers: { token: token! },
      })
      .then((response) => {
        return response.data;
      })
      .then((data: any) => {
        console.log(data.data);

        setFiles(data.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  let style = {
    width: "2%",
    height: "2%",
  };

  return (
    <>
      <Header
      signOut= "signOut"
        header="File"
        headerlinks={[
          { name: "Calendar", link: "/calendar" },
          { name: "Task", link: "/task" },
        ]}
      />
      <div className="file-container">
        <div className="">
          <table className="table">
            <thead>
              <tr className="head">
                <td className="image">Image</td>
                <td className="name">
                  <BsSearch />
                  name
                </td>
                <td className="size">size</td>
                <td className="UploadBy">Upload By</td>
                <td className="Tag">Tag</td>
                <td className="Date">Date</td>
              </tr>
            </thead>

            <tbody className="body">
              {Files.length === 0 && <h1>there are no files availab</h1>}
              {Files.map((row: any) => (
                <tr key={row._id} className="row">
                  <td>
                    {}
                    <h4>
                      <AiFillFile />
                    </h4>
                  </td>
                  <td className="name">{row.name}</td>
                  <td className="size">{row.fileSize}</td>
                  <td className="UploadBy">
                    <img className="image" src={row.uploadedBy.profileImage} />
                    {row.uploadedBy.fullname}
                  </td>
                  <td className="Tag">{row.Tag || "Tag"}</td>
                  <td className="Date">{row.uploadedOn}</td>
                  <td>
                    <button
                      className="button"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      actions
                    </button>
                  </td>
                  <td>
                    {}
                    <FiDownload />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button onClick={getAllFiles}> get file</button> */}
        </div>

        {/* </div> */}
      </div>
    </>
  );
}

//  useEffect(()=>{
//       axios.get("http://localhost:3008/tasks/files",{
//          method:'GET',
//          headers:{ 'Content-Type': 'application/json',"authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk2ODhjMGQyMjRjN2UwYTI2YjFjOSIsImlhdCI6MTYzNDY0MjcwOCwiZXhwIjoxNjM0NjQ1MTA4fQ.NRkL1ksU_zpMNBnzfzaVQwRcFEHcsulj2JskDLD_Sbg"}
//      })
//      .then(res => console.log(res))
//      .then(data => {
//         //  setFiles(data)
//      })
//      .catch(e =>{
//          console.log("error", e)
//      })

//  },[])

{
  /* <tbody>
                                  {Files.length===0 && <h1>there are no files availab</h1>}
                                {Files.map((row)=> (
                                    <tr key={row._id}>
                                <td>{}<h4><AiFillFile /></h4></td>
                                <td className="name">{row.name}</td>
                                <td className="size">{"24kb"}</td>
                                <td className="UploadBy"><img style={style} src={Image} alt = "profile" />  {"chinedu"}</td>
                                <td className="Tag">{"developer"}</td>
                                <td className="Date">{"2021-10-21"}</td>
                                <td><button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> actions</button></td>
                                <td>{}<FaFileDownload /></td>
                             </tr>
                            )              
                            ) 
                        }
            
                        </tbody> */
}

{
  /* <tbody>
                                  {Files.length===0 && <h1>there are no files availab</h1>}
                                {Files.map((row)=> (
                                    <tr key={row._id}>
                                <td>{}<h4><AiFillFile /></h4></td>
                                <td className="name">{row.name || "austin"}</td>
                                <td className="size">{row.size || "24kb"}</td>
                                <td className="UploadBy"><img style={style} src={Image} alt = "profile" /> {row.UploadBy || "chinedu"}</td>
                                <td className="Tag">{row.Tag || "developer"}</td>
                                <td className="Date">{row.Date ||"2021-10-21"}</td>
                                <td><button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> actions</button></td>
                                <td>{}<FaFileDownload /></td>
                             </tr>
                            )              
                            ) 
                        }
            
                        </tbody> */
}

{
  /* <tbody>
                                  {Files.length===0 && <h1>there are no files availab</h1>}
                                {Files.map((row)=> (
                                    <tr key={row}>
                                <td>{}<h4><AiFillFile /></h4></td>
                                <td className="name">{row}</td>
                                <td className="size">{"24kb"}</td>
                                <td className="UploadBy"><img  src={Image} alt = "profile" />  {"chinedu"}</td>
                                <td className="Tag">{"developer"}</td>
                                <td className="Date">{"2021-10-21"}</td>
                                <td><button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> actions</button></td>
                                <td>{}<FaFileDownload /></td>
                             </tr>
                            )              
                            ) 
                        }
            
                        </tbody> */
}


