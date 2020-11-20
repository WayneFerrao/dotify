import React, {useState} from 'react';
import PropTypes from "prop-types";

import styled from "styled-components";
import { TextField} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import format from "date-fns/format";

const CenterCreation = styled.div`
  width: 400px;
  height: 400px;
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
    margin-top:10%;
  }
  @media (min-width: 2560px) {
    margin-top:10%;

  }
  margin-left: auto;
  margin-right: auto;
  padding-top: 3%;
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

export default function CreateAccount(){
    const [startDate, setStartDate] = useState(new Date());
        return(
            <CenterCreation>
                <form noValidate autoComplete="off">
                    <Textfields placeholder="Enter your email" id="username" name="username"/>
                    <Textfields placeholder="Enter your email again" id="username" name="username"/>
                    <Textfields placeholder="Create a password"  type="password" id="password" name="password"/>
                    <Textfields placeholder="Enter a username" id="username" name="username"/>
                    <DatePicker selected={startdate} onChange={date => setStartDate(date)} />

                </form>
            </CenterCreation>
        );
    
}