import PropTypes from "prop-types";
import styled from "styled-components";
import { TextField} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const CenterLogin = styled.div`
  width: 300px;
  height: 300px;
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
  padding-top: 3%;
`;

const Textfields = styled.input`
  type:"text";
  height:30px;
  width: 225px; 
  border: none; /* <-- This thing here */
  border:solid 1px #333;
  padding: 1%;
  border-radius: 15px;

  margin-left: 9%;
  padding-left: 5%;
  margin-right: auto;
  margin-bottom: 5%;
`;

const LoginButton = styled.button`
  margin-left: 30%;
  background-color: #1db954;
  font-family: 'Source Sans Pro';
  font-weight: 700;
  color: #fff;
  font-size: 1.05em;
  width: 40%;
  height: 50px;
  border: none; /* <-- This thing here */
  border:solid 1px #333;
  border-radius: 10px;
`;

const NoAccount = styled.h3`
  text-align: center;
`;

const AccountButton = styled.button`
  margin-left: 15%;
  cursor: pointer;
  background-color: #fff;
  font-family: 'Source Sans Pro';
  font-weight: 700;
  font-size: 1.05em;
  width: 70%;
  height: 50px;
  border: none; /* <-- This thing here */
  border:solid 1px #333;
  border-radius: 10px;
`;

// Need to define styles for Material UI Components separately
const styles = withStyles({
    root: {
      height: '10%',
      marginTop: '5%',
      marginLeft:'10%',
      backgroundColor: "#fff",
      color: "#1db954"
    },
    inputlabel: {
      marginLeft:'10%',
      color: '#000',
      '&.Mui-focused fieldset': {
        color: '#000',
      },
    },
    focused:{
        color: '#000'
    }
  })(TextField);

//Functional Component 
export default function Login() {
    return (
        <CenterLogin>
            <form noValidate autoComplete="off">
                <Textfields placeholder="Username" id="username" name="username"/>
                <Textfields placeholder="Password"  type="password" id="password" name="password"/>
            </form>
            <LoginButton>LOG IN</LoginButton>
            <NoAccount>Don't have an account?</NoAccount>

            <AccountButton>
              <Link to="/signup">SIGN UP FOR DOTIFY </Link>
            </AccountButton>
        </CenterLogin>
        );
}
