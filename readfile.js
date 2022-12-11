// fs 是寫在node.js 裏頭的物件。
// 有寫好的method

const fs = require('fs');

//傳統callback，錯誤放前面。
//readFile() 的三個參數 1.檔名 2.檔案編碼方式 3.執行失敗或成功的執行的函式

// fs.readFile('test.txt','utf-8',(err,data) =>{
//     if (err) {
//         // err 的內容是錯誤訊息
//         console.log(err);
//     }else {
//         //err 若為 null 
//         //data 是檔案的內容(txt的文字檔)
//         console.log('成功讀取到資料',data)
//     }
// })

//用promise() 包住 readfile()
//先定義出新的Promise
//Promise 是一個建構函式，用來建構Promise物件，裏頭會有一個函式叫excutor
//excutor裏頭會有兩個函式作為參數
//resolve() , reject()

let ReadPromise = new promise((resolve,reject) => {
    fs.readFile('test.txt', 'utf-8' , (err,data) => {
        if(err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
    });

    ReadPromise.then((data)=>{
        console.log('我是then',data);
    }).catch((err) => {
        console.error('我是catch',err);
    });


