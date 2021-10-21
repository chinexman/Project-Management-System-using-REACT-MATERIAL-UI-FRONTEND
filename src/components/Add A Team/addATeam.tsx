import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import styled from "styled-components"
import { setTimeout } from 'timers';
// import Image from "../../image/avatar.jpg";
// import Delete from "../../image/Delete.svg";


function Profile() {
   type teamType = string[]
    const [fullname, setFullName] = useState('')
    const [role, setRole] = useState('')
    const [gender, setGender] = useState('')
    const [location, setLocation] = useState('')
    // const [location, setLocation] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [about, setAbout] = useState('')
    const [teams, setTeams] = useState<teamType>([])
    const [loading, setLoading] = useState(false)
    const [failed, setFailed] = useState("")

    ////test array of teams
    const teamsArr = [
        'Front-end', 'middle-end'
    ]
    const token = localStorage.getItem('token')
    useEffect(() => {
        setTeams(teamsArr) //the getAllteams endpoint
        axios.request({
        url: "https://kojjac.herokuapp.com/users/profile",
        method: "get",
        headers: {token:token!},
        withCredentials: true
        }).then((response:any)=> {
            setFullName(response.data.data.fullname)

           console.log(response.data.data)
        }).catch((err)=> {
           console.log(err.response)
        })
    }, [])


    const changePic = () => {
        //i don't think we should prompt this
        axios.request({
            url: "https://kojjac.herokuapp.com/",
            method: "post",
            data: { profileImage },
            headers: {token:token!},
            withCredentials: true
        }).then((response: any) => {
           console.log(response)
        }).catch((err)=> {

           console.log(err.response)
        })
    }

    const leaveTeamFunc = () => {
        //this should prompt the leave-team end-point
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        setLoading(true)
        //this should prompt the update-[profile end-point
        axios.request({
        url: "https://kojjac.herokuapp.com/users/profile",
        method: "put",
        data: { fullname, role, gender, location, about },
        headers: {token:token!},
        withCredentials: true
        }).then((response:any)=> {

            setLoading(false)
            setFailed("Updated successfully")
            
           console.log(response)
        }).catch((err)=> {
            setFailed(err.response.data.messsage)
           console.log(err.response)
        })
        
        
    }

    const changePicFile = (e:any) => {
        console.log(e.target.files[0])
    }

    return (
        <div>
            <Wrapper>
                <div className ="name">

                </div>
              <Form className = "profileForm" onSubmit={submitHandler}>
                  <label>
                    <h3>  Name </h3>
                    <Input 
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    type = " text"
                    placeholder = 'Enter name'
                    />
                  </label>
                     
                   <label>
                        <h3>  Teams </h3>
                        <div className="teams-input">
                            {teams.map((team,index) => {
                                return (
                                    <>
                                        <div className="team-div">
                                            <div key = {index} className="team-tag">{team}
                                            </div>                                           
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                  </label>
                 
                <button disabled={loading} type='submit' className = "button" >{loading ? 'Loading': 'Create Team' }</button>
                {/* {failed ? <strong className="failure-tag">Failed to update</strong> :  <strong className="failure-tag">Update successful</strong>} */}
                <p>{failed}</p>
              </Form>
            
                  
            </Wrapper>
        </div>
    )
}

export default Profile

const Wrapper = styled.div`
margin-top: 5rem;
padding-top: 1rem;
padding-bottom: 1rem;
width: 49vw;
min-width: 400px;
/* height: 90vh; */
background-color: #ffffff;
margin: 20px auto;
display: flex; 
justify-content: center;
align-items: center;
flex-direction: column;
.profileForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.image{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #ffffff;
    position: relative;
    margin-bottom: 30px;
    
}
img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    /* position: absolute;
    clip-path: circle(); */
}
.change-pic-div{
    width: 100px;
    height: 35px;
    background-color: var(--lightGrey-background);
    position: absolute;
    /* position: relative;*/
    top: 100px; 
    left: 25px;
    text-align: center;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px 5px 5px 5px;
}
.button{
    border-radius: 50px;
    background-color: var(--color-green);
    text-align: center; 
    width: 40vw;
    min-width: 300px;
    height: 6vh;
    margin: 10px 0;
    border: none;
    cursor: pointer;
    font-weight: bold;
}
h3{
    font-size: 1rem;
}
.cancel-btn{
    display: block;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
}
.about-textBox{
    padding:10px;
    margin: 10px 0;
    width: 40vw;
    height: 15vh;
    border: none;
    border-radius: 10px;
    background-color: var(--lightGrey-background);
}
.teams-input{
    width: 40vw;
    min-width: 300px;
    /* height: 6vh; */
    /* min-height: 6vh; */
    background-color: var(--lightGrey-background);
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    padding: 15px;
    height: 80px;
    overflow-x: scroll;
    overflow-y: hidden;
}
.team-div{
  margin-left: 5px;
  justify-content: center;
  align-items: center;
}
.team-tag{
    background-color: #ffffff;
    border-radius: 20px;
    padding: 10px ;
    margin-top: -10px;
    margin-right: 5px;
}
.removeTeam{
    cursor: pointer;
}
.failure-tag{
    font-style: italic;
    margin: 10px 0px;
    font-color: red;
}
`

const Input =styled.input `
width: 40vw;
min-width: 300px;
height: 6vh;
min-height: 6vh;
padding: 1rem;
background-color: var(--lightGrey-background);
border: none;
border-radius: 10px;
margin: 10px 0;
font-size: 1rem;
`