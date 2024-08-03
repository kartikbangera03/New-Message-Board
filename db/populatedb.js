const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255) ,
  username VARCHAR(255),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text , username) VALUES('Hello World' , 'Charles');

INSERT INTO messages (text , username) VALUES('Hi There' , 'Amando');
`;

async function main(){
    console.log("seeding.....");
    const client =  new Client({
        connectionString : process.env.DATABASE_CONNECTION_STRING
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();