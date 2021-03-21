const http = require('http');
const url = require('url');
const mysql = require("mysql");

const endPoint = 'http://jmajam.com/COMP4537/labs/DBAss';

const db = mysql.createConnection({
    host: "localhost",
    user: "jmajamco_test",
    password: "Pleaseconnect",
    database: "jmajamco_ass1"
});

db.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("connected");
});
function deleteQ(){
    return new Promise(function (resolve, reject) {
        let query = "Truncate table quoteTable";
        db.query(query, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}
function query(quote,name){
    return new Promise(function (resolve, reject) {
        let query = `INSERT INTO quoteTable (quoteData, nameData) VALUES ("${quote}","${name}")`;
        db.query(query, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
    });
}

function queryGetOne(){
    return new Promise(function (resolve, reject) {

    });
}

const server = http.createServer(async function (req, res) {
    let url = req.url;
    res.writeHead(200, {'Content-Type': 'text/html',
        "Access-Control-Allow-Origin" : "*", "Access-Control-Allow-Headers": "*"});
    if (req.method === "POST" && url === '/COMP4537/labs/DBAss/save') {
        res.writeHead(200, {'Content-Type': 'text/html',
            "Access-Control-Allow-Origin" : "*"});
        let data = '';
        let json = {};
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', async () => {
            json = JSON.parse(data);
            try {
                await query(json["quote"],json["name"]);
                res.write(json["quote"] + json["name"]);
            } catch (e) {
                res.write("sadge" + typeof json["quote"]);

            }
        });
        res.end();
    } else if (req.method === "POST" && url === '/COMP4537/labs/DBAss/clear') {
        res.writeHead(200, {'Content-Type': 'text/html',
            "Access-Control-Allow-Origin" : "*"});
        try {
            await deleteQ();
            res.end("CLEAN");
        } catch (e) {
            res.end("sadge no clean");

        }
    } else if (req.method === "GET" && url === '/COMP4537/labs/DBAss/quotes/1' ) {
        let result = "lmao";
        let query = `SELECT * FROM quoteTable ORDER BY id DESC LIMIT 1`;
        db.query(query, (err, result) => {
           if (err) throw err;
           result = JSON.stringify(result);
           res.end(result);
        });
    } else if (req.method === "GET" && url === '/COMP4537/labs/DBAss/quotes' ) {
        let results = "lmao";
        let query = `SELECT * FROM quoteTable `;
        db.query(query, (err, result) => {
            if (err) throw err;
            results = JSON.stringify(result);
            res.end(results);
        });
    } else {
        res.write("NOPE");
        res.end();
    }

});

server.listen();