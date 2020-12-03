/*
    Update UI controls component.
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
    let valueType = document.getElementById('valueType').value;
    let value = document.getElementById('value').value;
    let condition = document.getElementById('condition').value;
    if (condition.length > 0){
        props.queryFunction(`UPDATE ${table} SET ${valueType} = ${value} WHERE ${condition}`);
    } else {
        props.queryFunction(`UPDATE ${table} SET ${valueType} = ${value}`);
    }
}

export default function display(props) {
    return (
        <CenterDiv>
            <h3>Update</h3>
            <label>
                Table Name: <input id="table" type="text" name="name" />
            </label><br/><br/>
            <label>
                Value Type: <input id="valueType" type="text" name="name" />
            </label><br/><br/>
            <label>
                Value: <input id="value" type="text" name="name" />
            </label><br/><br/>
            <label>
                Condition (Optional): <input id="condition" type="text" name="name" />
            </label>
            <br/><br/>
            <input type="button" value="Execute" onClick={() => query1(props)}/>
        </CenterDiv>
    );
}