const express = require('express')
const oracledb = require('oracledb');
const app = express();
const port = 3000;
var username = 'system';
var password = 'oracle';

// ENDPOINTS-------------------------------------------------------------------------------

//example for user input query
app.post('/query', function (req, res) {
  //get post data
  const name = req.body.query
  getQuery(req, res, query);
})

//example for general query
app.get('/tracks', function (req, res) {
  getTracks(req, res);
})

//example for specific query
app.get('/user', function (req, res) {
  //get query param ?id
  let id = req.query.id;
  //id param if it is number
  if (isNaN(id)) {
      res.send('Query param id is not number')
      return;
  }
  getUser(req, res, id);
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

async function getTracks(req, res) {
    try {
        query = async() => connection.execute(`SELECT * FROM tracks`);
        execute(req, res, query);
    } catch (err) {
        console.log(err.message);
    }
}

async function getUser(req, res, id) {
    try {
        query = async() => connection.execute(`SELECT * FROM users where userid = :id`, [id]);
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
            connectString: "localhost:1521/xe"
          });
        console.log('connected to database');
        
        //run the query
        result = await query();
    
      } catch (err) {
        //send error message
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
        if (result.rows.length == 0) {
          //query return nothing
          return res.send('query send no rows');
        } else {
          //send result
          return res.send(result.rows);
        }
    }
}


app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port))