var mongoose = require('mongoose');

var EEGSample = mongoose.model('EEGSample', {
    time: {
        type: Date
    },
    theta: {
        type: Number
    },
    lowAlpha: {
        type: Number
    },
    highAlpha: {
        type: Number
    },
    lowBeta: {
        type: Number
    },
    highBeta: {
        type: Number
    },
    lowGamma: {
        type: Number
    },
    highGamma: {
        type: Number
    },
    attention: {
        type: Number
    },
    meditation: {
        type: Number
    },
    blink: {
        type: Number
    }
});

module.exports =  {EEGSample}