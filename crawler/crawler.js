//http://54.71.133.152:3000/stocks?stockNo=2618&date=202211

const  axios = require('axios');

// axios
//     .get('http://54.71.133.152:3000/stocks?stockNo=2618&date=202211')
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((e) => {
//         console.error(e);
//     });



async function getData() {
    try {
        const get = await axios.get('http://54.71.133.152:3000/stocks?stockNo=2618&date=202211');
        const data = get;
        console.log(data);
    }   catch (e) {
        console.error(e);
    }
}

getData();