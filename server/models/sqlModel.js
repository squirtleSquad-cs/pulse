const { Pool } = require('pg');

const myURI = 'postgres://ospwnzby:l1MsVWst8wjaCK-ge7IDIKrSMmIuJ21w@heffalump.db.elephantsql.com/ospwnzby'

const URI = process.env.PG_URI || myURI;


const pool = new Pool({
  connectionString: URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}; 

