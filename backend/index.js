/*
  REST API for Dotify DBMS.
*/
const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

//CHANGE CONNECTION INFORMATION HERE-------------------------------------------------------------------------------
var username = 'system';
var password = 'oracle';
var connectionString = 'localhost:1521/xe';
//-----------------------------------------------------------------------------------------------------------------

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.autoCommit = true;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json());

app.use(cors());

// ENDPOINTS-------------------------------------------------------------------------------

app.post('/query', function (req, res) {
  const query = req.body.query
  getQuery(req, res, query);
})

// QUERIES-------------------------------------------------------------------------------

async function getQuery(req, res, userQuery) {
  try {
      query = async() => connection.execute(userQuery);
      execute(req, res, query);
  } catch (err) {
      console.log(err.message);
  }
}

// HELPERS-------------------------------------------------------------------------------

async function execute(req, res, query){
    try {
        connection = await oracledb.getConnection({
            user: username,
            password: password,
            connectString: connectionString
          });
        console.log('connected to database');
        
        //run the query
        result = await query();
      } catch (err) {
        //send error message
        console.log(err);
        return res.send(err.message);
      } finally {
        if (connection) {
          try {
            //always close connections
            await connection.close();
            console.log('close connection success');
          } catch (err) {
            console.error(err.message);
          }
        }
        return res.send(result.rows);
    }
}


app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port))