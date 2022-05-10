import axios from "axios"


export const testApp = async () => {
    const test = 'test';
    await axios.post('http://localhost:5002/test', {
        test
    })
        .then(function (response) {
            console.log('response', response);
        })
        .catch(function (error) {
            console.log(error);
        });
}



