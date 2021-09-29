const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
const BASE_URL = '/api';

app.use(bodyParser.raw({type: "application/octet-stream"}));
app.use(cors());

app.post(`${BASE_URL}/license`, async (req, res) => {
    getLicense(req,res);   
});

async function getLicense(req, res) {

    let licenseUrl = 'https://cwip-shaka-proxy.appspot.com/no_auth';
    let rurl = `${licenseUrl}`;

    let config = {
        method: 'POST',
        url: rurl,
        headers: {
            "content-type" : "application/octet-stream"
        },
        data : new Int8Array((req.body)),
        responseType: 'arraybuffer',
    };

    axios(config) 
    .then(function (response) {
        // console.log("Served Request");
        res.status(response.status).send(response.data);
    })
    .catch(function (error) {
        return res.status(400).send(error);
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});