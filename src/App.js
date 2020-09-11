import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { MuiPickersUtilsProvider,DateTimePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import {Autocomplete} from '@material-ui/lab'
import MomentUtils from '@date-io/moment';
import { TextField,Button,CardHeader } from '@material-ui/core';


function App() {
  const [date,setDate]=useState(1);
  const [course,setCourse]=useState('');
  const [units,setUnits]=useState('');
  const [startDateState,setStartDate]=useState(new Date("2000-01-01"));
  const [endDate,setEndDate]=useState(new Date("2000-01-01"))
  var a,b,c;
  const token='eyJ0eXAiOiJKV1QiLCJub25jZSI6Ii1lenZEMVcteW9OT1JlOEhiT2VnaVNtM0JFWk52RVN4UkxPXzQ2MlFmOUkiLCJhbGciOiJSUzI1NiIsIng1dCI6ImppYk5ia0ZTU2JteFBZck45Q0ZxUms0SzRndyIsImtpZCI6ImppYk5ia0ZTU2JteFBZck45Q0ZxUms0SzRndyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZjM2NDRlOC03YjcxLTQ3OTgtODA5MS00MGZhOWU4MDQ4ZDYvIiwiaWF0IjoxNTk5NzQ2NTA2LCJuYmYiOjE1OTk3NDY1MDYsImV4cCI6MTU5OTc1MDQwNiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhRQUFBQS81T2hDcnErUS9EeXF5d2I0YzJ5VWRpU2FEbWt6TWFyL1RjNGVhSk00UHc9IiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBleHBsb3JlciAob2ZmaWNpYWwgc2l0ZSkiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImdpdmVuX25hbWUiOiJMYXhtaSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEwNi41MS4yNDMuMzYiLCJuYW1lIjoiTGF4bWkiLCJvaWQiOiIyYWIwODNiMi0zYzNkLTQ0NWEtOTcwNC04MzY2NmRmYzg2MTYiLCJwbGF0ZiI6IjE0IiwicHVpZCI6IjEwMDMyMDAwRDI3RjREOEIiLCJyaCI6IjAuQUFBQTZFUTJiM0Y3bUVlQWtVRDZub0JJMXJYSWk5NzUyYkZJcUsyM1NOcHlVR1FZQUlFLiIsInNjcCI6IkNhbGVuZGFycy5SZWFkV3JpdGUgb3BlbmlkIHByb2ZpbGUgVXNlci5SZWFkIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiYmN4aTVzZ1VZUFJvai1zdmFTcWtLMWg4MndVX0drSDBjcWxtLWM5Q1ZpSSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjZmMzY0NGU4LTdiNzEtNDc5OC04MDkxLTQwZmE5ZTgwNDhkNiIsInVuaXF1ZV9uYW1lIjoiTGF4bWlAdnRlYW1sYWJzLmNvbSIsInVwbiI6IkxheG1pQHZ0ZWFtbGFicy5jb20iLCJ1dGkiOiJIc2xLbDlJVVAweWIyeXh5aVFFYkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6IlVvSkFuQjFIa2EwWFZYT1pZM3pzTmxsZXpzNzJCTUYxancyTzVtMzUwcW8ifSwieG1zX3RjZHQiOjE0NDM0MjA2MDR9.wTRSUxLd6bRGzMt6qrk8MxLxEKwU9GxRa_Hcveqh_2_1XLCzyPRh3uhUP_3JIE6yj5uKCrIXDBmLmwrs5ein7mMFEW7oGLG9HmQ9DPxVW_urq2npfopL9w8mqDOMMOLE5UbjeAI45AWliKpVQ6DO8GmcN-uVY3hsiRfo4c96AV6eYuYefj9M4mbIDXJDVY2K9kG9tWcBlqp_qjli5AUIDjWLI2uRWqDM9fGv1f8F0HWpFDLaSI2_S8KPP3kRQLzxZYJXtkTzs3TBqM4jrL70llj88pcBu4PtbbGzTHY0jdpaV9c_cSJ-3IEzBvOlfrAM2mBPY6pa5AH1Q3tb5Y5BHA';

  useEffect(()=>{
    console.log('something')
  },[])

  const addEvent=()=>{
    Axios.post('https://graph.microsoft.com/v1.0/me/calendars/AAMkAGUxYzhmYWViLTk3Y2MtNGNlOC04OTYyLWEzMDk2ODg5M2M1NgBGAAAAAAD9QiWpkpRiTLHApXmB7B8lBwC2pBhdGQNITo-78bb6qcJDAAAAAAEGAAC2pBhdGQNITo-78bb6qcJDAAAeos5PAAA=/events'
            ,
            {
              subject: b,
              body: {
                contentType: "HTML",
                content: c
              },
              start: {
                  dateTime: `2020-09-${a}T12:00:00`,
                  timeZone: "India Standard Time"
              },
              end: {
                  dateTime: `2020-09-${a}T14:00:00`,
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
          })

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
              onChange={setStartDate}
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
              onChange={setEndDate}
              />
            </MuiPickersUtilsProvider>
        </div>
      </div>
      <div className='Division'>
        <p className="TextTitle">Select the course</p>
        <Autocomplete options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{width: '100%', margin: 0,alignSelf: 'center' }}
            onInputChange={(event,newValue)=>setCourse(newValue)}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"   />}/>
      </div>
      <div className='Division'>
        <p className="TextTitle">Select the unit</p>
        <Autocomplete options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{width: '100%', margin: 0,alignSelf: 'center' }}
            onInputChange={(event,newValue)=>setUnits(newValue)}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}/>
      </div>
      <div className='Division'>
        <p className="TextTitle">API KEY</p>
        <TextField onChange={(event)=>console.log(event.target.value)}
            />
      </div>
      <div className="HorizontalDivision">
       <Button onClick={addEvent} variant='contained' color='primary' style={{margin: 30}} >Submit</Button>
       <Button onClick={addEvent} variant='contained' color='secondary' style={{margin: 30}} >Cancel</Button>
      </div>
      
    </div>
      
        </body>
    </div>
  );
}



const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

export default App;
