/*
    Create Table UI controls component.
*/
import styled from "styled-components";
const CenterDiv = styled.div`
  text-align: center;
  background-color: white;
  margin: 0em 11.5em;
  padding: 0.1em 1em 1.3em 1em;
  border-radius: 1em;
`;

function handleSubmit(e) {
    e.preventDefault();
}

function query1(props) {
    let table = document.getElementById('table').value;
    let columns = document.getElementById('columns').value;
    props.queryFunction(`
        CREATE TABLE ${table} (${columns})
    `);
}

export default function display(props) {
    return (
        <CenterDiv>
            <h3>Create Table</h3>
            <label>
                Table Name: <input id="table" type="text" name="name" />
            </label><br/><br/>
            Columns<br/>
            <textarea id="columns" name="columns" rows="4" cols="50"></textarea>
            <br/><br/>
            <input type="button" value="Execute" onClick={() => query1(props)}/>
        </CenterDiv>
        );
}