import {Component} from 'react';
import { Button, Container, TextField} from '@material-ui/core';
import styled from "styled-components";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';

 
const BGContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1db954;
`;

const Title = styled.div`
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 900;
  font-size: 7.5em;
  text-align: center;
  padding-top: 2%;
  @media (min-width: 1024px) {
    padding-top:2%;
  }
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Motto  = styled.h3`
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 2em;
  text-align: center;
  margin-top: 0;
`;


// Need to define styles for Material UI Components separately
const styles = {
  root: {
    background: "black"
  },
  input: {
    color: "white"
  }
};


class App extends Component {
  render(){
    const Home = () =>(
      <BGContainer>
        <Title>Dotify</Title>
        <Motto> Streaming. Made. Simple.</Motto>
        <Login/>
      </BGContainer>
    );
    return (
        <Router>
          <div>
              <Route exact path='/' component={Home}/>
              <Route exact path='/signup' component={CreateAccount}/>
          </div>
        </Router>
    );
  }
}

export default App;
