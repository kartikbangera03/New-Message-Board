const pool = require("./pool");

async function getAllMessages(){
    const {rows} = await pool.query("SELECT * FROM messages");
    // console.log("Pool Object....");
    // console.log(pool);
    // console.log("Rows Received");
    // console.log(rows);
    return rows;
}

async function addNewMessage(text , username){
    await pool.query("INSERT INTO messages (text , username) VALUES($1,$2)" , [text , username])
}

module.exports = {
    addNewMessage,
    getAllMessages
}