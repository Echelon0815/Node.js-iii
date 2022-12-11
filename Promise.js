// Promise 是一個表示 非同步運算的最終完成或失敗的 物件
// 1.Promise 是一個物件 new.Promise()
//   new Promise (executor)
//   executor: function(resolve,reject) {}
//2. 此處呼叫doWork() →回傳Promise()回傳的值，也就是成功後回傳的text;
//3. 失敗呼叫reject; 成功則呼叫resolve

let doWork = function (job, timer) {
    // 1. 物件 -> new
    return new Promise((resolve,reject) => {
    //setTimeout()成功的話resolve()的參數設為`完成工作 ${job} at ${now.toISOString()}`
    setTimeout(() => {
      let now = new Date();
      resolve(`完成工作 ${job} at ${now.toISOString()}`);
    }, timer);
    });
};

let brushPromise = doWork('刷牙', 3000);
brushPromise
  .then((data) => {
    console.log(data); return doWork('早餐', 3000)
  })
  .then((data) => {
    console.log(data); return doWork('上班', 3000)
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error('發生錯誤', err);
  });


//開始前先宣布現在時間
  let now = new Date();
  console.log(`工作開始 at ${now.toISOString()}`);

//刷牙 3 秒鐘 -> 吃早餐 5 秒鐘 -> 寫功課 3 秒鐘
//doWork會回傳一個Promise物件，Promise物件有then和catch兩種method
//then() 裡面的參數可以有兩個，或只寫一個 分別代表成功時執行的cb和失敗執行的cb
//catch() 裏頭則只能放失敗時執行的cb
//這裡定義成功時的cb funtion(data) => {console.log(data); return doWork()}
//data 被 dowork定義成 `完成工作...`
let brushPromise = doWork('刷牙', 3000);
brushPromise
  .then((data) => {
    console.log(data); return doWork('早餐', 3000)
  })
  .then((data) => {
    console.log(data); return doWork('上班', 3000)
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error('發生錯誤', err);
  });
