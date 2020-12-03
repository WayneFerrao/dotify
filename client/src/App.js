/*
    Parent container component for all UI.
*/
import {Component} from 'react';
import styled from "styled-components";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DisplayQueries from './Display';

const BGContainer = styled.div`
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
        <Motto>Database Management System</Motto>
        <DisplayQueries/>
      </BGContainer>
    );
    return (
        <Router>
          <div>
              <Route exact path='/' component={Home}/>
              <Route exact path='/display' component={Home}/>
              <Route exact path='/create' component={Home}/>
              <Route exact path='/drop' component={Home}/>
              <Route exact path='/users' component={Home}/>
              <Route exact path='/tracks' component={Home}/>
              <Route exact path='/artists' component={Home}/>
              <Route exact path='/playlists' component={Home}/>
              <Route exact path='/albums' component={Home}/>
          </div>
        </Router>
    );
  }
}

export default App;
