import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { MuiPickersUtilsProvider,DateTimePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import {Autocomplete} from '@material-ui/lab'
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { TextField,Button,CardHeader } from '@material-ui/core';

function App() {
  const [date,setDate]=useState(1);
  const [course,setCourse]=useState('');
  const [dourse,setDourse]=useState('');
  const [units,setUnits]=useState('');
  const [title,setTitle]=useState('');
  const [startDateState,setStartDate]=useState(moment().toDate());
  const [endDate,setEndDate]=useState(moment().toDate())
  const [token,setToken]=useState('');
  var a,b,c,d;
  const [courses,setCourses]=useState(['']);
  //var token='eyJ0eXAiOiJKV1QiLCJub25jZSI6Ii1lenZEMVcteW9OT1JlOEhiT2VnaVNtM0JFWk52RVN4UkxPXzQ2MlFmOUkiLCJhbGciOiJSUzI1NiIsIng1dCI6ImppYk5ia0ZTU2JteFBZck45Q0ZxUms0SzRndyIsImtpZCI6ImppYk5ia0ZTU2JteFBZck45Q0ZxUms0SzRndyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZjM2NDRlOC03YjcxLTQ3OTgtODA5MS00MGZhOWU4MDQ4ZDYvIiwiaWF0IjoxNTk5NzQ2NTA2LCJuYmYiOjE1OTk3NDY1MDYsImV4cCI6MTU5OTc1MDQwNiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhRQUFBQS81T2hDcnErUS9EeXF5d2I0YzJ5VWRpU2FEbWt6TWFyL1RjNGVhSk00UHc9IiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBleHBsb3JlciAob2ZmaWNpYWwgc2l0ZSkiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImdpdmVuX25hbWUiOiJMYXhtaSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEwNi41MS4yNDMuMzYiLCJuYW1lIjoiTGF4bWkiLCJvaWQiOiIyYWIwODNiMi0zYzNkLTQ0NWEtOTcwNC04MzY2NmRmYzg2MTYiLCJwbGF0ZiI6IjE0IiwicHVpZCI6IjEwMDMyMDAwRDI3RjREOEIiLCJyaCI6IjAuQUFBQTZFUTJiM0Y3bUVlQWtVRDZub0JJMXJYSWk5NzUyYkZJcUsyM1NOcHlVR1FZQUlFLiIsInNjcCI6IkNhbGVuZGFycy5SZWFkV3JpdGUgb3BlbmlkIHByb2ZpbGUgVXNlci5SZWFkIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiYmN4aTVzZ1VZUFJvai1zdmFTcWtLMWg4MndVX0drSDBjcWxtLWM5Q1ZpSSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjZmMzY0NGU4LTdiNzEtNDc5OC04MDkxLTQwZmE5ZTgwNDhkNiIsInVuaXF1ZV9uYW1lIjoiTGF4bWlAdnRlYW1sYWJzLmNvbSIsInVwbiI6IkxheG1pQHZ0ZWFtbGFicy5jb20iLCJ1dGkiOiJIc2xLbDlJVVAweWIyeXh5aVFFYkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6IlVvSkFuQjFIa2EwWFZYT1pZM3pzTmxsZXpzNzJCTUYxancyTzVtMzUwcW8ifSwieG1zX3RjZHQiOjE0NDM0MjA2MDR9.wTRSUxLd6bRGzMt6qrk8MxLxEKwU9GxRa_Hcveqh_2_1XLCzyPRh3uhUP_3JIE6yj5uKCrIXDBmLmwrs5ein7mMFEW7oGLG9HmQ9DPxVW_urq2npfopL9w8mqDOMMOLE5UbjeAI45AWliKpVQ6DO8GmcN-uVY3hsiRfo4c96AV6eYuYefj9M4mbIDXJDVY2K9kG9tWcBlqp_qjli5AUIDjWLI2uRWqDM9fGv1f8F0HWpFDLaSI2_S8KPP3kRQLzxZYJXtkTzs3TBqM4jrL70llj88pcBu4PtbbGzTHY0jdpaV9c_cSJ-3IEzBvOlfrAM2mBPY6pa5AH1Q3tb5Y5BHA';

  useEffect(()=>{
    var arr=[];
    Axios.get('https://edxvteam.com/api/courses/v1/courses/')
    .then((response)=>{
      arr=response.data.results;
      setCourses(arr);
    },(error)=>{
      console.log(error);
    })
    console.log(startDateState.getFullYear());
  },[]);

  const addEvent=()=>{

    const syear  = startDateState.getFullYear();
    const smonth = (startDateState.getMonth() + 1).toString().padStart(2, "0");
    const sday   = startDateState.getDate().toString().padStart(2, "0");
    const shours= startDateState.getHours().toString().padStart(2,"0");
    const sminutes= startDateState.getMinutes().toString().padStart(2,"0")
    const eyear  = endDate.getFullYear();
    const emonth = (endDate.getMonth() + 1).toString().padStart(2, "0");
    const eday   = endDate.getDate().toString().padStart(2, "0");
    const ehours= endDate.getHours().toString().padStart(2,"0");
    const eminutes= endDate.getMinutes().toString().padStart(2,"0")
    //alert(`${startDateState.getFullYear()}-${startDateState.getMonth()}-${startDateState.getDate()}T${startDateState.getHours()}:${startDateState.getMinutes()}:00${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}T${endDate.getHours()}:${endDate.getMinutes()}:00`)
    Axios.post('https://graph.microsoft.com/v1.0/me/calendars/AAMkAGUxYzhmYWViLTk3Y2MtNGNlOC04OTYyLWEzMDk2ODg5M2M1NgBGAAAAAAD9QiWpkpRiTLHApXmB7B8lBwC2pBhdGQNITo-78bb6qcJDAAAAAAEGAAC2pBhdGQNITo-78bb6qcJDAAAeos5PAAA=/events'
            ,
            {
              subject: title,
              body: {
                contentType: "HTML",
                content: course+dourse
              },
              start: {
                  dateTime: `${syear}-${smonth}-${sday}T${shours}:${sminutes}:00`,
                  timeZone: "India Standard Time"
              },
              end: {
                  dateTime: `${eyear}-${emonth}-${eday}T${ehours}:${eminutes}:00`,
                  timeZone: "India Standard Time"
              },
              location:{
                  displayName:"Microsoft team"
              },
              attendees: [
                {
                  emailAddress: {
                    address:"students@gmail.com",
                    name: "student 1"
                  },
                  type: "required"
                }
              ]
            },
            {
              headers: { Authorization: `Bearer ${token}` }
          }).then((response)=>{
            console.log(response);
          },(error)=>{
            console.log(error);
          })
          //alert(`${startDateState.getFullYear()}-${startDateState.getMonth()}-${startDateState.getDate()}T${startDateState.getHours()}:${startDateState.getMinutes()}:00${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}T${endDate.getHours()}:${endDate.getMinutes()}:00`)

  }
  
   
  const clicky=(event)=>{
    a=event.target.value;
    } 

  return (
    <div className="App">
      <header className="App-header">
        <p>Schedule a class</p> 
      </header>
      <body className='Bady'>
        
    <div className="Form">
      <div className="Division">
        <p className="TextTitle">Meeting Title</p>
        <TextField
            color="white"
            type='text'
            label='Enter the meeting title'
            variant='outlined'
            onChange={(event)=> {
              setTitle(event.target.value);
              b=event.target.value;
            console.log(b)}}
            inputStyle={{color: 'white', padding: '0 25px'}}
            style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 10000,borderWidth: 5,borderColor: 'black' }}
          />
      </div>
      <div className="HorizontalDivision">
        <div className="Division">
          <p className="TextTitle">Start Date</p>
            <MuiPickersUtilsProvider utils={MomentUtils} >
              <KeyboardDateTimePicker 
              variant='dialog' 
              onChange={(date)=>{console.log(date);
                setStartDate(date.toDate())}}
              value={startDateState}
              disablePast/>
            </MuiPickersUtilsProvider>
        </div>
        <div className="Division">
          <p className="TextTitle">End Date</p>
            <MuiPickersUtilsProvider utils={MomentUtils} >
              <KeyboardDateTimePicker 
              variant='dialog' 
              minDate={startDateState}
              value={endDate}
              onChange={(date)=>{setEndDate(date.toDate())}}
              />
            </MuiPickersUtilsProvider>
        </div>
      </div>
      <div className='Division'>
        <p className="TextTitle">Select the course</p>
        <Autocomplete options={courses}
            getOptionLabel={(option) => option.name}
            style={{width: '100%', margin: 0,alignSelf: 'center' }}
            onInputChange={(event,newValue)=>{setCourse(newValue)
            }}
            renderInput={(params) => <TextField {...params} label="Select the course" variant="outlined"   />}/>
      </div>
      <div className='Division'>
        <p className="TextTitle">Select the unit</p>
        <Autocomplete options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{width: '100%', margin: 0,alignSelf: 'center' }}
            onInputChange={(event,newValue)=>setDourse(newValue)}
            renderInput={(params) => <TextField {...params} label="Select course unit" variant="outlined" />}/>
      </div>
      <div className='Division'>
        <p className="TextTitle">API KEY</p>
        <TextField onChange={(event)=>{setToken(event.target.value)
        console.log(token)}}
            />
      </div>
      <div className="HorizontalDivision">
      <Button onClick={addEvent} variant='contained' color='secondary' style={{margin: 30}} >Cancel</Button>
       <Button onClick={addEvent} variant='contained' color='primary' style={{margin: 30}} >Submit</Button>
       
      </div>
      
    </div>
      
        </body>
    </div>
  );
}



const top100Films = [
  { title: 'Unit 1', year: 1994 },
  { title: 'Unit 2', year: 1994 },
  { title: 'Unit 3', year: 1994 },
  { title: 'Unit 4', year: 1994 }
  
];

export default App;
