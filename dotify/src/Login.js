import PropTypes from "prop-types";
import styled from "styled-components";
import { Button, Container, TextField} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
const CenterLogin = styled.div`
  width: 300px;
  height: 300px;
  border: solid 2px #000;
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
  padding-top: 5%;
`;

const Textfields = styled.input`
    type:"text";
    height:30px;
    width: 200px; 
    border: none; /* <-- This thing here */
    border:solid 1px #333;
    padding: 1%;
    border-radius: 15px;

    margin-left: 15%;
    margin-right: auto;
    margin-bottom: 5%;
`;
const LoginButton = styled.button`
    margin-left: 34%;
    width: 30%;
    height: 30px;
    border: none; /* <-- This thing here */
    border:solid 1px #333;
    border-radius: 10px;
    margin-bottom: 5%;
`;
const AccountButton = styled.button`
    margin-left: 25%;
    width: 50%;
    height: 30px;
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
export default function Login(props) {
    const { classes } = props;
    return (
        <CenterLogin>
            <form noValidate autoComplete="off">
                <Textfields placeholder="Username" id="username" name="username"/>
                <Textfields placeholder="Password"  type="password" id="password" name="password"/>
            </form>
            <LoginButton>Login</LoginButton>
            <AccountButton>Create Account</AccountButton>
        </CenterLogin>
        );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
  };


