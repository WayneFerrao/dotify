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

const RowDiv = styled.div`
  padding: 5%;
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
export default function UpdateQueries() {
    return (
        <CenterDiv>
           <form action=":5000/action_page.php"> {/*Change to API endpoint :5000/api?? idk */}
                <RowDiv>
                    <div>
                        <label for="tables">Choose a table:</label>
                        <select name="tables" id="tables">
                            <option value="tracks">Tracks</option>
                            <option value="albums">Albums</option>
                            <option value="artists">Artists</option>
                            <option value="playlists">Playlists</option>
                        </select>
                    </div>
                    <div>
                        <label for="tables">Choose an action:</label>
                        <select name="tables" id="tables">
                            <option value="read">Read</option>
                            <option value="update">Update</option>
                            <option value="delete">Delete</option>
                        </select>
                    </div>
                    <input type="submit" value="Submit"></input>
                </RowDiv>
            </form>
            <UpdateButton>< Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Manage Table  </Link></UpdateButton>
        </CenterDiv>
        );
}
