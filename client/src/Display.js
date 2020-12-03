/*
    Display component for query ui and results.
*/
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import Create from './Create'
import Drop from './Drop'
import Search from './Search'
import Add from './Add'
import Delete from './Delete'
import Update from './Update'
const CenterDiv = styled.div`
  text-align: center;
`;

const ResultDiv = styled.div`
    direction: rtl;
    overflow-y: scroll;
    padding: 1.1em;
    text-align: left;
    background-color: black;
    color: white;
    height: 20em;
    max-height: 20em;
    max-width: 100%;
`;

const QueryButton = styled.button`
    margin: 0.5em;
`;

const QueryDetails = styled.p`
    margin: auto;
    text-align: left;
    background-color: #fffb94;
    padding: 0.5em;
    width: 50%;
    border-radius: 0.5em;
`;

const MenuButton = styled.button`
  margin: 0em 1em;  
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

async function inputQuery(input){
    let data = { query: input };
    console.log(JSON.stringify(data));
    let response = await fetch("http://localhost:5000/query",{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.text();
        var str = 'HTTP-Response: ' + response.ok + "<br/><br/>";
        if (!(!json || 0 === json.length)){
            try {
                var obj = JSON.parse(json);
                for (var i = 0; i < obj.length; i++) {
                    str += "Row " + i + ": " + JSON.stringify(obj[i], null, 4) + "<br/><br/>";
                }
            } catch (err) {
                str = 'HTTP-Response: false<br/><br/>';
                alert("Query Error: " + err);
            }
        }
        document.getElementById("display").innerHTML = str;
    } else {
        alert("HTTP-Error: " + response.status);
        document.getElementById("display").innerHTML = 'HTTP-Response: false<br/><br/>';
    }
}

function query1() {
    inputQuery(`
        SELECT artists.artistname, COUNT(trackid) AS NumOfSongs
        FROM tracks 
        RIGHT JOIN artists ON  tracks.artistid = artists.artistid 
        WHERE explicit = '1' AND tracklength >= 180
        GROUP by artists.artistname
        ORDER by NumOfSongs DESC
    `);
}

function query2() {
    inputQuery(`
        SELECT 
        playlists.playlistname,
        COUNT(tracks.trackid) AS NumOfSongs
        FROM playlists, tracks, playlisttracks
        WHERE
            playlists.playlistID = playlisttracks.playlistid
        AND
            tracks.trackid = playlisttracks.trackid
        GROUP by playlists.playlistname
        ORDER by NumOfSongs DESC
    `);
}

function query3() {
    inputQuery(`
        SELECT t.trackname
        FROM tracks t
        WHERE EXISTS
        (SELECT a.artistid
        FROM artists a
        WHERE a.artistname='Martin Garrix'
            AND t.artistid=a.artistid)
    `);
}
function query4() {
    inputQuery(`
        SELECT MIN(tracklength)
        FROM tracks t
        WHERE EXISTS
        (SELECT *
        FROM artists a
        WHERE a.artistname = 'Kanye'
        AND a.artistid = t.artistid)
    `);
}

function query5() {
    inputQuery(`
        SELECT artists.artistname, COUNT(trackid) AS NumOfSongs
        FROM tracks 
        RIGHT JOIN artists ON  tracks.artistid = artists.artistid 
        WHERE explicit = '1' AND tracklength >= 180
        GROUP by artists.artistname
        ORDER by NumOfSongs DESC
    `);
}

function query6() {
    inputQuery(`
        SELECT *
        FROM albums al
        WHERE NOT EXISTS 
        (SELECT artistid
            FROM artists ar
            WHERE artistname='Khalid'
            AND ar.artistid = al.artistid)
    `);
}

export default function DisplayQueries() {
    const [mode, setMode] = useState('Home');
    let button = '';
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `${mode}`;
    }, [mode]);
    switch(mode) {
        case 'Home':
            button=``;
            break;
        case 'Create':
            button=<Create queryFunction={inputQuery}></Create>;
            break;
        case 'Drop':
            button=<Drop queryFunction={inputQuery}></Drop>;
            break;
        case 'Search':
            button=<Search queryFunction={inputQuery}></Search>;
            break;
        case 'Add':
            button=<Add queryFunction={inputQuery}></Add>;
            break;
        case 'Delete':
            button=<Delete queryFunction={inputQuery}></Delete>;
            break;
        case 'Update':
            button=<Update queryFunction={inputQuery}></Update>;
            break;
        default:
            button=``;
    }
    return (
        <CenterDiv>
            <div>
                <MenuButton onClick={() => {setMode('Create')}}>Create Table</MenuButton>
                <MenuButton onClick={() => {setMode('Drop')}}>Drop Table</MenuButton>
                <MenuButton onClick={() => {setMode('Search')}}>Search</MenuButton>
                <MenuButton onClick={() => {setMode('Add')}}>Add</MenuButton>
                <MenuButton onClick={() => {setMode('Delete')}}>Delete</MenuButton>
                <MenuButton onClick={() => {setMode('Update')}}>Update</MenuButton>
                <br/><br/>
                {button}
                <h3>Premade Queries</h3>
                <QueryDetails>
                    [Query 1] - Get ordered lists of Artists with the most explicit tracks longer than 3 minutes<br/>
                    [Query 2] - Get the ordered number of songs in all playlists<br/>
                    [Query 3] - Get all the tracks produced by the artist named Martin Garrix<br/>
                    [Query 4] - Get the length of the shortest song produced by Kanye<br/>
                    [Query 5] - Get all the albums that are NOT produced by the artist named Khalid<br/>
                    [Query 6] - Get the length of the shortest and longest track<br/>
                </QueryDetails>
                <QueryButton type="button" onClick={query1}>Query 1</QueryButton>
                <QueryButton type="button" onClick={query2}>Query 2</QueryButton>
                <QueryButton type="button" onClick={query3}>Query 3</QueryButton>
                <QueryButton type="button" onClick={query4}>Query 4</QueryButton>
                <QueryButton type="button" onClick={query5}>Query 5</QueryButton>
                <QueryButton type="button" onClick={query6}>Query 6</QueryButton>
            </div>
            <h3>Result</h3>
           <ResultDiv id="display"></ResultDiv>
        </CenterDiv>
        );
}