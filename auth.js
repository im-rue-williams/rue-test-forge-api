const express = require('express');
const Axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.json());
app.set('port', process.env.PORT)

const server = app.listen(app.get('port'), () => {
    console.log(`Congrats, your server is up on port ${server.address().port}`)
})
var access_token = '';
const datastring = new URLSearchParams({
    client_id: process.env.FORGE_CLIENT_ID,
    client_secret: process.env.FORGE_CLIENT_SECRET,
    grant_type: 'client_credentials',
    scope: 'data:read data:write data:create bucket:create bucket:read'
});

// app.get('/api/forge/oauth', (req, res) => {
//     Axios({
//         method: 'POST',
//         url: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//         },
//         data: datastring.toString()
//     })
//         .then((res) => {
//             // Success
//             access_token = res.data.access_token;
//             console.log(access_token);
//         })
//         .catch((err) => {
//             // Failed
//             console.log(err);
//             res.send('Failed to authenticate');
//         });
// });