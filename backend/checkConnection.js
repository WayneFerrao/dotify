const oracledb = require('oracledb');
// checkConnection asycn function
async function checkConnection() {
  try {
    //CONNECT
    connection = await oracledb.getConnection({
        user: "system",
        password: "oracle",
        connectString: "localhost:1521/xe"
    });

    //DO STUFF
    console.log('connected to database');

  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection();