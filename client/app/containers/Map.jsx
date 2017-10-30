import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectWord } from '../actions'

import Box2D from 'box2dweb';
import * as mapConfig from '../lib/mapConfig';

const axios = require('axios');


const dummy = [
  {
    key: 'United States',
    matching_results: '50001',
    continent: 'nAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'President of the United States',
    matching_results: '40000',
    continent: 'nAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Stock Market',
    matching_results: '30000',
    continent: 'nAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Stock',
    matching_results: '20000',
    continent: 'nAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'English-language films',
    matching_results: '10000',
    continent: 'nAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'United Kingdom',
    matching_results: '50000',
    continent: 'Europe',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Manchester United F.C.',
    matching_results: '40000',
    continent: 'Europe',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'English-language films',
    matching_results: '30000',
    continent: 'Europe',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'United States',
    matching_results: '20000',
    continent: 'Europe',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'United States',
    matching_results: '10000',
    continent: 'Europe',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Graphic design',
    matching_results: '50000',
    continent: 'sAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Marketing',
    matching_results: '40000',
    continent: 'sAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Cyrillic alphabet',
    matching_results: '30000',
    continent: 'sAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'World Wide Web',
    matching_results: '20000',
    continent: 'sAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Experience',
    matching_results: '10000',
    continent: 'sAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }
]


class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    }
    // TODO: need to come up with new data structure
    // TODO: refactor process for generating mapData and rendering in map
  }

  componentDidMount() {
    // axios.get('/concepts')
    //   .then((response) => {
    //     console.log('axios get done');
    //     let conceptData = response.data.concepts;
    //     this.generateImages(conceptData);
    //     this.physicsInit();
    //     console.log('finished physics init');
    //   })
    //   .catch((error) => console.log('Map.jsx: ', error));
    console.log('componentDidMount: generating with dummy data');
    this.physicsInit();
  }

  //map will rerender and zoom back out if the state changes
  shouldComponentUpdate(nextProps) {
    //if the word changes, return false so the map doesn't rerender
    const different = nextProps.activeWord === this.props.activeWord
    return different;
  }

  generateImages(conceptData) {
    let images = [];

    console.log('conceptData: ', conceptData);

    for(let continent in conceptData) {
      conceptData[continent].forEach(function(concept, index) {
        images.push({
          'latitude' : mapConfig.geoCenters[continent].latitude,
          'longitude' : mapConfig.geoCenters[continent].longitude,
          // 'type' : 'circle',
          // 'color' : mapConfig.bubbleColor.major.bubble,
          // 'scale' : mapConfig.scale.major,
          'labelFontSize' : concept[1] > 5 ? 22 : 11 + concept[1] * 1.5,
          'label' : concept[0],
          'labelPosition' : 'middle',
          'labelColor' : mapConfig.bubbleColor.major.label,
          'selectable' : true,
          'selectedLabelColor' : '#db2e2e',
          'code' : continent,
          'name' : concept[0],
        })
      })
    }

    //dummy data to test hide/show image group
    images.push({
      'groupId': 'hello',
      'latitude' : 0,
      'longitude' : 25,
      // 'type' : 'circle',
      // 'color' : mapConfig.bubbleColor.major.bubble,
      // 'scale' : mapConfig.scale.major,
      'labelFontSize' : 28,
      'label' : "HELLO",
      'labelPosition' : 'middle',
      'labelColor' : '#238796',
      'selectable' : true,
      'selectedLabelColor' : '#db2e2e'
    })

    this.setState({images: images});
  }

  physicsInit() {
    var map;
    var minBulletSize = 7;
    var maxBulletSize = 80;

    // set dark theme
    window.AmCharts.theme = AmCharts.themes.black;

    // get min and max values
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < dummy.length; i++) {
        var matching_results = dummy[i].matching_results;
        if (matching_results < min) {
            min = matching_results;
        }
        if (matching_results > max) {
            max = matching_results;
        }
    }

    map = new AmCharts.AmMap();
    map.addClassNames = true;
    // map.pathToImages = "https://www.amcharts.com/lib/3/images/";
    map.fontFamily = "Lato";
    map.fontSize = 15;
    map.creditsPosition = "top-right";
    map.zoomControl.buttonFillColor = "#343434";

    // style tooltip
    map.balloon = {
      adjustBorderColor: false,
      horizontalPadding: 20,
      verticalPadding: 10,
      color: "#FFFFFF",
      maxWidth: 300,
      borderAlpha: 0,
      borderThickness: 1
    }

    // bubbles are images, we set opacity and tooltip text
    map.imagesSettings = {
      balloonText: "[[title]]: [[value]]",
      alpha: 0.7
    }

    // map.addClassNames = true;
    map.defs = {
      "filter": [{
        "id": "blur",
        "feGaussianBlur": {
          "in": "SourceGraphic",
          "stdDeviation": 2
        }
      }]
    };

    // make areas barely visible
    map.areasSettings = {
      unlistedAreasAlpha: 0.1,
      unlistedAreasOutlineAlpha: 0
    };

    // data provider. We use continents map to show real world map in background.
    var dataProvider = {
      map: "continentsLow",
      images: []
    }

    // create circle for each country
    var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
    var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

    // create circle for each country
    for (var i = 0; i < dummy.length; i++) {
      var dataItem = dummy[i];
      var matching_results = dataItem.matching_results;
      // calculate size of a bubble
      var square = (matching_results - min) / (max - min) * (maxSquare - minSquare) + minSquare;
      if (square < minSquare) {
        square = minSquare;
      }
      var size = Math.sqrt(square / (Math.PI * 2));
      var continent = dataItem.continent;

      dataProvider.images.push({
        type: "circle",
        width: size,
        height: size,
        // color: dataItem.color,
        color: '#ffffff',
        longitude: mapConfig.geoCenters[continent].longitude,
        latitude: mapConfig.geoCenters[continent].latitude,
        title: dataItem.key,
        matching_results: matching_results
      });
    }

    map.dataProvider = dataProvider;

    console.log('phys, dataProvider: ', dataProvider);

    // Listen for the init event and initialize box2d part
    map.addListener("init", initBox2D)

    map.write("chartdiv");

    var width = 900;
    var height = 600;
    var pixels2meters = 30; // box2d uses meters, not pixels and this is ratio
    var framesPerSecond = 40;
    var world;
    var images;

    function initBox2D() {
      var width = 900;
      var height = 600;
      var pixels2meters = 30; // box2d uses meters, not pixels and this is ratio
      var framesPerSecond = 40;
      // var world;
      // var images;

      var b2Vec2 = Box2D.Common.Math.b2Vec2;
      var b2BodyDef = Box2D.Dynamics.b2BodyDef;
      var b2Body = Box2D.Dynamics.b2Body;
      var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
      var b2Fixture = Box2D.Dynamics.b2Fixture;
      var b2World = Box2D.Dynamics.b2World;
      var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
      var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
      var b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef;
      var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;


      world = new b2World(
        new b2Vec2(0, 10), //gravity
        false //allow sleep, false otherwise joints might not be restored
      );

      // walls and ground. please, study box2d tutorials if you want to understand everything below
      var wallsBodyDef = new b2BodyDef();
      wallsBodyDef.type = b2Body.b2_staticBody;

      var wallsFixtureDef = new b2FixtureDef();
      wallsFixtureDef.density = 1.0;
      wallsFixtureDef.friction = 0.5;
      wallsFixtureDef.restitution = 0.2;

      // floor
      wallsFixtureDef.shape = new b2PolygonShape();
      wallsFixtureDef.shape.SetAsBox(width / pixels2meters, 10 / pixels2meters);
      wallsBodyDef.position.Set(0, (height - 10) / pixels2meters);
      world.CreateBody(wallsBodyDef).CreateFixture(wallsFixtureDef);

      // left wall
      wallsFixtureDef.shape.SetAsBox(5 / pixels2meters, height / pixels2meters);
      wallsBodyDef.position.Set(0, 0);
      world.CreateBody(wallsBodyDef).CreateFixture(wallsFixtureDef);

      // right wall
      wallsBodyDef.position.Set(width / pixels2meters, 0);
      world.CreateBody(wallsBodyDef).CreateFixture(wallsFixtureDef);


      // bubbles
      var bubbleBodyDef = new b2BodyDef();
      bubbleBodyDef.angularDamping = 3; // we don't want to bubbles to rotate like crazy
      bubbleBodyDef.linearDamping = 0.5; // makes movement more smooth. If you increase this value, bubbles will move like in some oil
      bubbleBodyDef.type = b2Body.b2_dynamicBody;

      var bubbleFixtureDef = new b2FixtureDef();
      bubbleFixtureDef.density = 0.2;
      bubbleFixtureDef.friction = 0.3;
      bubbleFixtureDef.restitution = 0.6; // adjust this property to reduce or increase bouncing

      // we need to keep bubbles in place, so we create a static body to which bubbles will be constrained - think of a nail at each bubble position
      var nailFixtureDef = new b2FixtureDef();
      nailFixtureDef.shape = new b2CircleShape(2 / pixels2meters);

      var nailBodyDef = new b2BodyDef();
      nailBodyDef.type = b2Body.b2_staticBody; // nails are static, they don't move

      // now, loop through images of map's data provider
      images = map.dataProvider.images;

      for (var i = 0; i < images.length; i++) {
        var image = images[i];

        // create bubble
        bubbleFixtureDef.shape = new b2CircleShape(image.width / 2 / pixels2meters);
        bubbleBodyDef.position.x = image.displayObject.x / pixels2meters;
        bubbleBodyDef.position.y = image.displayObject.y / pixels2meters;
        var bubble = world.CreateBody(bubbleBodyDef).CreateFixture(bubbleFixtureDef);

        // create nail
        nailBodyDef.position.x = image.displayObject.x / pixels2meters;
        nailBodyDef.position.y = image.displayObject.y / pixels2meters;
        var nail = world.CreateBody(nailBodyDef).CreateFixture(nailFixtureDef);
        nail.SetSensor(true); // nail is sensor - this means the bubbles won't colide with it and can overlap

        // now, we need to link bubble with a nail with a joint (imagine a string)
        var jointDef = new b2DistanceJointDef();
        jointDef.bodyA = bubble.GetBody();
        jointDef.bodyB = nail.GetBody();
        // the following tow lines describes stiffness of a string, try to modify them.
        jointDef.dampingRatio = 0.4;
        jointDef.frequencyHz = 1.5;
        // lenght 0 means that the bubble will try to be at the nail position (if other bubbles allow)
        jointDef.length = 0;
        //connect the centers
        jointDef.localAnchorA = new b2Vec2(0, 0);
        jointDef.localAnchorB = new b2Vec2(0, 0);

        var joint = world.CreateJoint(jointDef);
        // store definition, image and joint in mapImage object
        image.jointDef = jointDef;
        image.box2Dimage = bubble;
        image.joint = joint;
      }

      //setup debug draw (if you don't need it, just delete the lines, uncomment to see how box objects are drawn)
      /*
      var debugDraw = new b2DebugDraw();
      debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
      debugDraw.SetDrawScale(pixels2meters);
      debugDraw.SetFillAlpha(0.5);
      debugDraw.SetLineThickness(1.0);
      debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
      world.SetDebugDraw(debugDraw);
      */
      // interval to update bubbles
      // release initially to do some animation
      releaseBubbles();
      // attach bubbles in some time
      setTimeout(attachBubbles, 8000);
      window.setInterval(update, 1000 / framesPerSecond)
    }

    //update bubbles
    function update() {
      var width = 900;
      var height = 600;
      var pixels2meters = 30; // box2d uses meters, not pixels and this is ratio
      var framesPerSecond = 40;

      var images = map.dataProvider.images;

      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        var box2Dimage = image.box2Dimage;

        // box2D takes care of positions of bubbles, we simply get those positions and set them on ammap bubbles.
        var bbody = box2Dimage.GetBody();
        var position = bbody.GetPosition(); // position = image.box2Dimage.getBody().getPosition()

        // console.log('position: ', position);

        var currentX = position.x;
        var currentY = position.y;
        image.displayObject.translate(position.x * 30, position.y * 30, 1, true);
      }

      world.Step(1 / framesPerSecond, 10, 10);

      // uncomment next line if you want to see box2d objects in action (also canvas element at the bottom)
      // world.DrawDebugData();
      world.ClearForces();
    };

    // releases bubbles
    function releaseBubbles() {
      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        setTimeout(destroyJoint, Math.random() * 2000, image); // we release bubbles randomly during 2 sec interval
      }
    }

    // destroys joint
    function destroyJoint(image) {
      if (image.joint) {
        world.DestroyJoint(image.joint);
        image.joint = null;
      }
    }

    // attach bubbles back
    function attachBubbles() {
      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if (!image.joint) {
          setTimeout(restoreJoint, Math.random() * 100, image); // we attach bubbles randomly during 0.1 sec interval
        }
      }
    }

    // restores joint
    function restoreJoint(image) {
      var joint = world.CreateJoint(image.jointDef);
      image.joint = joint;
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{width: '900px', height: '600px', margin: 'auto'}} />
    );
  }  
}


function mapStateToProps (state) {
  return {
    activeWord: state.activeWord
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectWord: selectWord}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);