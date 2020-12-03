/*
    Add UI controls component.
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
    let valueTypes = document.getElementById('valueTypes').value;
    let values = document.getElementById('values').value;
    props.queryFunction(`INSERT INTO ${table} (${valueTypes}) VALUES (${values})`);
}

export default function display(props) {
    return (
        <CenterDiv>
            <h3>Add</h3>
            <label>
                Table Name: <input id="table" type="text" name="name" />
            </label><br/><br/>
            <label>
                Value Types: <input id="valueTypes" type="text" name="name" />
            </label><br/><br/>
            <label>
                Values: <input id="values" type="text" name="name" />
            </label>
            <br/><br/>
            <input type="button" value="Execute" onClick={() => query1(props)}/>
        </CenterDiv>
        );
}