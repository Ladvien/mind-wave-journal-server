var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose.js');
var {EEGSample} = require('./models/eeg-sample.js');

var app = express();

app.use(bodyParser.json());

app.post('/eggsamples', (req, res) => {
    console.log(req.body);

    let = eegSample = req.body;

    var eegSample = new EEGSample(eegSample)
    
    eegSample.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.send(err);
    });
}); 

app.listen(3000, '0.0.0.0', () => {
    console.log('Started on port 8080');
})

