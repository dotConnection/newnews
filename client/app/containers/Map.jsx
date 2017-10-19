import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import * as mapConfig from '../lib/mapConfig';

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    }
  }
  componentWillMount() {
    this.generateImages();
  }

  generateImages() {
    let images = [];

    // generate NA
    let conceptsNA = mapConfig.dummyData['NA'];
    for(let i = 0; i < conceptsNA.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.NA.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.NA.longitude + mapConfig.coordOffsets[i].longitude,
        'type' : 'circle',
        'color' : mapConfig.bubbleColor.major.bubble,
        // 'scale' : mapConfig.scale.major,
        'scale' : conceptsNA[i][1],
        'label' : conceptsNA[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
      })
    }

    // generate SA
    let conceptsSA = mapConfig.dummyData['SA'];
    for(let i = 0; i < conceptsSA.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.SA.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.SA.longitude + mapConfig.coordOffsets[i].longitude,
        'type' : 'circle',
        'color' : mapConfig.bubbleColor.major.bubble,
        // 'scale' : mapConfig.scale.major,
        'scale' : conceptsSA[i][1],
        'label' : conceptsSA[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
      })
    }

    // generate EU
    let conceptsEU = mapConfig.dummyData['EU'];
    for(let i = 0; i < conceptsEU.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.EU.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.EU.longitude + mapConfig.coordOffsets[i].longitude,
        'type' : 'circle',
        'color' : mapConfig.bubbleColor.major.bubble,
        // 'scale' : mapConfig.scale.major,
        'scale' : conceptsEU[i][1],
        'label' : conceptsEU[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
      })
    }

    // generate AF
    let conceptsAF = mapConfig.dummyData['AF'];
    for(let i = 0; i < conceptsAF.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.AF.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.AF.longitude + mapConfig.coordOffsets[i].longitude,
        'type' : 'circle',
        'color' : mapConfig.bubbleColor.major.bubble,
        // 'scale' : mapConfig.scale.major,
        'scale' : conceptsAF[i][1],
        'label' : conceptsAF[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
      })
    }

    // generate APAC
    let conceptsAPAC = mapConfig.dummyData['APAC'];
    for(let i = 0; i < conceptsAPAC.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.APAC.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.APAC.longitude + mapConfig.coordOffsets[i].longitude,
        'type' : 'circle',
        'color' : mapConfig.bubbleColor.major.bubble,
        // 'scale' : mapConfig.scale.major,
        'scale' : conceptsAPAC[i][1],
        'label' : conceptsAPAC[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
      })
    }

    // generate AU
    let conceptsAU = mapConfig.dummyData['AU'];
    for(let i = 0; i < conceptsAU.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.AU.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.AU.longitude + mapConfig.coordOffsets[i].longitude,
        'type' : 'circle',
        'color' : mapConfig.bubbleColor.major.bubble,
        // 'scale' : mapConfig.scale.major,
        'scale' : conceptsAU[i][1],
        'label' : conceptsAU[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
      })
    }

    this.setState({images: images});
  }

  render () {
    return (
      <AmCharts.React
        style={{
          'width': '100%',
          'height': '500px',
          'backgroundAlpha' : 1,
          'backgroundColor' : '#eeeeee'
        }}
        options ={{
          'type': 'map',
          'theme' : 'chalk',
          'dataProvider' : {
            'map' : 'continentsLow',
            'getAreasFromMap' : true,
            'zoomLevel' : mapConfig.zoomSettings.zoomLevel,
            'zoomLatitude' : mapConfig.zoomSettings.zoomLatitude,
            'zoomLongitude' : mapConfig.zoomSettings.zoomLongitude,
            'images' : this.state.images,
          },
          'areasSettings': {
            'autoZoom' : true,
            'selectedColor' : '#CC0000'
          }
        }} 
      />
    );
  }
}

export default Map;

/*'images' : [
              {
                'latitude' : mapConfig.geoCenters.NA.latitude,
                'longitude' : mapConfig.geoCenters.NA.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#TRUMP',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.NA.latitude + mapConfig.coordOffsets.north.latitude,
                'longitude' : mapConfig.geoCenters.NA.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.NA.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.NA.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.NA.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.NA.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.NA.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.NA.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.SA.latitude,
                'longitude' : mapConfig.geoCenters.SA.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#TEMER',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.SA.latitude + mapConfig.coordOffsets.north.latitude * 1.4,
                'longitude' : mapConfig.geoCenters.SA.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.SA.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.SA.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.SA.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.SA.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.SA.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.SA.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.EU.latitude,
                'longitude' : mapConfig.geoCenters.EU.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#DRAGHI',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.EU.latitude + mapConfig.coordOffsets.north.latitude,
                'longitude' : mapConfig.geoCenters.EU.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.EU.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.EU.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.EU.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.EU.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.EU.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.EU.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AF.latitude,
                'longitude' : mapConfig.geoCenters.AF.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#OshiAgabi',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.AF.latitude + mapConfig.coordOffsets.north.latitude * 1.25,
                'longitude' : mapConfig.geoCenters.AF.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AF.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.AF.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AF.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.AF.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AF.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.AF.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.APAC.latitude,
                'longitude' : mapConfig.geoCenters.APAC.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#PUTIN',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.APAC.latitude + mapConfig.coordOffsets.north.latitude,
                'longitude' : mapConfig.geoCenters.APAC.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.APAC.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.APAC.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.APAC.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.APAC.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.APAC.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.APAC.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AU.latitude,
                'longitude' : mapConfig.geoCenters.AU.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#OZ',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.AU.latitude + mapConfig.coordOffsets.north.latitude * 1.25,
                'longitude' : mapConfig.geoCenters.AU.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AU.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.AU.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AU.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.AU.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AU.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.AU.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              },
            ],*/