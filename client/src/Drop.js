/*
    Drop Table UI controls component.
*/
import styled from "styled-components";
const CenterDiv = styled.div`
  text-align: center;
  background-color: white;
  margin: 0em 11.5em;
  padding: 0.1em 1em 1.3em 1em;
  border-radius: 1em;
`;

function query1(props) {
    let table = document.getElementById('table').value;
    props.queryFunction(`DROP TABLE ${table}`);
}

export default function display(props) {
    return (
        <CenterDiv>
            <h3>Drop Table</h3>
            <label>
                Table Name: <input id="table" type="text" name="name" />
            </label><br/><br/>
            <input type="button" value="Execute" onClick={() => query1(props)}/>
        </CenterDiv>
        );
}