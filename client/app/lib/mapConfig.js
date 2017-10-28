const axios = require('axios');

const geoCenters = {
  'nAmerica' : {
    'latitude' : 48.3548,
    'longitude' : -99.9989,
  },
  'sAmerica' : {
    'latitude' : -15.6006,
    'longitude' : -56.1004
  },
  'Europe' : {
    'latitude' : 54.5423,
    'longitude' : 15.198
  },
  'Africa' : {
    'latitude' : 1.261,
    'longitude' : 25
  },
  'Asia' : {
    'latitude' : 50,
    'longitude' : 100
  },
  'Oceania' : {
    'latitude' : -23.02,
    'longitude' : 140.10
  }
}

const coordOffsets = {
  '0' : {
    'latitude' : 0,
    'longitude' : 0
  },
  '1' : {
    'latitude' : 11.5,
    'longitude' : 0
  },
  '2' : {
    'latitude' : -15,
    'longitude' : 0
  },
  '3' : {
    'latitude' : -5,
    'longitude' : 20
  },
  '4' : {
    'latitude' : 5,
    'longitude' : -20
  }
}

const scale = {
  'major' : 5,
  'minor' : 2.5
}

const bubbleColor = {
  'major' : {
    'bubble' : '#00cc62',
    'label' : '#000000'
  },
  'minor' : {
    'bubble' : 'yellow',
    'label' : '#db2e2e'
  }
}

const zoomSettings = {
  'zoomLevel' : 1.25,
  'zoomLatitude' : 35,
  'zoomLongitude' : 5,
}

module.exports = {
  geoCenters: geoCenters,
  coordOffsets: coordOffsets,
  scale: scale,
  bubbleColor: bubbleColor,
  zoomSettings: zoomSettings,
}
