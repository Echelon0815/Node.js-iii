let doWork = function (job, timer, cb) {
    setTimeout(() => {
      let now = new Date();
      cb(null, `完成工作 ${job} at ${now.toISOString()}`);
    }, timer);
  };
  
  let now = new Date();
  console.log(`工作開始 at ${now.toISOString()}`);

//   刷牙 3 秒鐘 -> 吃早餐 5 秒鐘 -> 寫功課 3 秒鐘
  doWork('刷牙', 3000, (err, data) => {
    console.log(data);
  });



// doWork(`刷牙`,3000);
// doWork(`吃早餐`,8000);
// doWork(`吃早餐`,11000);

// const brush = () => {console.log(`刷完牙了`);};
// const eat = () => {console.log(`吃完早餐了`);};
// const doHomework = () => {console.log(`做完功課了`);};

// let queue = [];
// queue.push(brush,eat,doHomework);
// console.log(queue);