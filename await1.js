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

let now = new Date();

console.log(`工作開始 at ${now.toISOString()}`);

let brushPromise = doWorkPromise('刷牙',3000);

async function doJob() {
    let result =await brushPromise;
    console.log(`這是 await 後的結果`,result);
}

