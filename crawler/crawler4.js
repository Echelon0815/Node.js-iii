const fs =require('fs/promises');

const moment = require('moment');

const mysql2 = require('mysql2');

(async () => {
    try {
        let stockNo = await fs.readFile('stcok.txt','uft-8');
        
    }
})