const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 25,
    host     : 'sql12.freemysqlhosting.net',
    user     : 'sql12256952',
    password : 'W8H7PvUvhI',
    database : 'sql12256952'
});

function getImageHost(dir = "") {
    return `http://fatihsimsek.me/restoran/Public/Uploads/${dir}`;
}

function query({ sql = '', values = [] }) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(sql, values, (err2, result) => {
                if (err2) return reject(err2);
                resolve({result});
                connection.release();
            });
        });
    });
}

module.exports = {
    getImageHost : getImageHost,
    query : query
}; 