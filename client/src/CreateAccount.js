import React, {useState} from 'react';
import PropTypes from "prop-types";

import styled from "styled-components";
import { TextField} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import format from "date-fns/format";
import "react-datepicker/dist/react-datepicker.css";
const BGContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1db954;
`;

const CenterCreation = styled.div`
  width: 300px;
  height: 410px;
  border: solid 2px #000;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  @media (min-width: 319px) {
    margin-top:50%;
  }
  @media (min-width: 768px) {
    margin-top:30%;
  }
  @media (min-width: 1024px) {
    margin-top:20%;
  }
  @media (min-width: 1440px) {
    margin-top:15%;
  }
  @media (min-width: 2560px) {
    margin-top:10%;

  }
  margin-left: auto;
  margin-right: auto;
  padding: 1.1em;
`;

const Textfields = styled.input`
  type:"text";
  height:30px;
  width: 225px; 
  border: none; /* <-- This thing here */
  border:solid 1px #333;
  padding: 1%;
  border-radius: 10px;

  margin-left: 9%;
  padding-left: 5%;
  margin-right: auto;
  margin-bottom: 5%;
`;

const CenterContainer = styled.div`
  text-align:center
`;

const SubmiteButton = styled.input`
  type:"submit";
`;

export default function CreateAccount(){
    const [startDate, setStartDate] = useState(new Date());
        return(
          <BGContainer>
            <CenterCreation>
                <form noValidate autoComplete="off">
                    <CenterContainer><h3>Please fill out the following fields to create your account.</h3></CenterContainer>
                    <CenterContainer>Email Address</CenterContainer>
                    <Textfields placeholder="Enter your email" id="username" name="username"/>
                    <CenterContainer>Password</CenterContainer>
                    <Textfields placeholder="Create a password"  type="password" id="password" name="password"/>
                    <CenterContainer>Username</CenterContainer>
                    <Textfields placeholder="Enter a username" id="username" name="username"/>
                    <CenterContainer>Birthdate</CenterContainer>
                    <CenterContainer>
                      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    </CenterContainer>
                    <br/>
                    <CenterContainer>
                      <input type="submit" value="Submit"></input>
                    </CenterContainer>
                </form>
            </CenterCreation>
          </BGContainer>
        );
    
}