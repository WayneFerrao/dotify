import styled from "styled-components";

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

async function inputQuery(){
    let data = { query: document.getElementById("query").value };
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

async function premadeQuery(preQuery){
    let data = { query: preQuery };
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
            let obj = JSON.parse(json);
            for (var i = 0; i < obj.length; i++) {
                str += "Row " + i + ": " + JSON.stringify(obj[i], null, 4) + "<br><br>";
            }
        }
        document.getElementById("display").innerHTML = str;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

function handleSubmit(e) {
    e.preventDefault();
    inputQuery();
}

function query1() {
    premadeQuery(`
        SELECT artists.artistname, COUNT(trackid) AS NumOfSongs
        FROM tracks 
        RIGHT JOIN artists ON  tracks.artistid = artists.artistid 
        WHERE explicit = '1' AND tracklength >= 180
        GROUP by artists.artistname
        ORDER by NumOfSongs DESC
    `);
}

function query2() {
    premadeQuery(`
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
    premadeQuery(`
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
    premadeQuery(`
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
    premadeQuery(`
        SELECT artists.artistname, COUNT(trackid) AS NumOfSongs
        FROM tracks 
        RIGHT JOIN artists ON  tracks.artistid = artists.artistid 
        WHERE explicit = '1' AND tracklength >= 180
        GROUP by artists.artistname
        ORDER by NumOfSongs DESC
    `);
}

function query6() {
    premadeQuery(`
        SELECT *
        FROM albums al
        WHERE NOT EXISTS 
        (SELECT artistid
            FROM artists ar
            WHERE artistname='Khalid'
            AND ar.artistid = al.artistid)
    `);
}

//Functional Component 
export default function DisplayQueries() {
    return (
        <CenterDiv>
            <div>
                <h3>Custom Query</h3>
                <form onSubmit={handleSubmit} method="post">
                    <textarea id="query" rows="10" cols="30" placeholder="Enter query here..."></textarea>
                    <br/><br/>
                    <input type="submit"/>
                </form>
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