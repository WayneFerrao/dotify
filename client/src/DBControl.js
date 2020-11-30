import PropTypes from "prop-types";
import styled from "styled-components";
import { TextField} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';


const AccountButton = styled.button`
  margin-left: 2%;
  cursor: pointer;
  background-color: #fff;
  font-family: 'Source Sans Pro';
  font-weight: 700;
  font-size: 1.05em;
  width: 10%;
  height: 50px;
  border: none; /* <-- This thing here */
  border:solid 1px #333;
  border-radius: 10px;
  a:link {
    text-decoration: none;
  }
`;
const UpdateButton = styled.button`
  margin-left: 2%;
  cursor: pointer;
  background-color: #111;
  color:#fff;
  font-family: 'Source Sans Pro';
  font-weight: 700;
  font-size: 1.05em;
  width: 10%;
  height: 50px;
  border: none; /* <-- This thing here */
  border:solid 1px #333;
  border-radius: 10px;
`;
const CenterDiv = styled.div`
  text-align: center;
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
export default function DBControl() {
    return (
        <CenterDiv>
            <AccountButton>Create Tables</AccountButton>
            <AccountButton>Drop Tables</AccountButton>
            <AccountButton>Populate Tables</AccountButton>
            <AccountButton>Query Tracks</AccountButton>
            <AccountButton>Query Artists</AccountButton>
            <AccountButton>Query Playlists</AccountButton>
            <AccountButton>Query Albums</AccountButton>
            <UpdateButton><Link to="/update" style={{ textDecoration: 'none', color: '#fff'  }}>Update Queries</Link></UpdateButton>
        </CenterDiv>
        );
}
