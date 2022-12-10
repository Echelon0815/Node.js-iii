let doWork = function (job, timer, cb) {
    setTimeout(() => {
      let now = new Date();
      cb(null, `完成工作 ${job} at ${now.toISOString()}`);
    }, timer);
  };

//顯示任務開始前的時間  
let now = new Date();
console.log(`工作開始 at ${now.toISOString()}`);

// 刷牙 3 秒鐘 -> 吃早餐 5 秒鐘 -> 寫功課 3 秒鐘
// 這一大串是定義了cb()的內容，cb裏頭會一直重複呼叫doWork()，同時也會呼叫自己。
doWork('刷牙', 3000, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
      doWork('吃早餐', 5000, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
          doWork('寫功課', 3000, (err, data) => {
            if (err) {
              console.error(err);
            } else {
              console.log(data);
            }
          });
        }
      });
    }
  });
