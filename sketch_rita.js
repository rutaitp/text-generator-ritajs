var input;
// var fs = require('fs'); 

var posdict;

function setup() {

  noCanvas();
  input = select('#talk');
  var button1 = select('#submit');
  button1.mousePressed(submit);
}

function submit () {

  //change to input value
  talkText = input.value();
  talk = talkText.toLowerCase();

  var p = createP('');
  p.class('text');
  p.html(talk);
  p.style('float', 'left');
  p.style('width', '37%');
  p.style('background-color', '#F0B4E8');
  p.style('margin-top', '4%');
  p.style('font-family', 'Helvetica');
  p.style('font-size', '11pt');

  var tokens = talk.split(/(\W+)/);

  posdict = {};

  for (var i = 0; i < tokens.length; i++) {
    var pos = RiTa.getPosTags(tokens[i]);
    console.log(pos);
    //look for the first element to put into dictionary
    var first = pos[0];
    //if element first doesn't exist yet, create it as an array
    if (!posdict[first]) {
      posdict[first] = [];
    }
    //and push all the words that belong to it inside of it
    posdict[first].push(tokens[i]);
  }

  var output = '';

  for (var i = 0; i < tokens.length; i++) {
    var pos = RiTa.getPosTags(tokens[i]);
    var first = pos[0];
    if (first == 'nn') {
      // pick a random noun from podict['n']
      output += random(posdict['nn']);
    } else if (first == 'jj') {
      // pick a random noun from podict['n']
      output += random(posdict['jj']);
    } else if (first == 'nns') {
      output += random(posdict['nns']);
    } else if (first == 'vbz') {
      output += random(posdict['vbz']);
    } else if (first == 'dt') {
      output += random(posdict['dt']);
    } else if (first == 'rb') {
      output += random(posdict['rb']);
    } else if (first == 'uh') {
      output += random(posdict['uh']);
    } else if (first == 'vb') {
      output += random(posdict['vb']);
    } else if (first == 'vbd') {
      output += random(posdict['vbd']);
    } else if (first == 'vbg') {
      output += random(posdict['vbg']);
    } else if (first == 'vbn') {
      output += random(posdict['vbn']);
    } else if (first == 'vbp') {
      output += random(posdict['vbp']);
    } else if (first == 'vbz') {
      output += random(posdict['vbz']);
    } else {
      output += tokens[i];  
    }
  }
  console.log(output);

  var newP = createP('');
  newP.class('text');

  var r = floor(random(100, 255));
  var g = floor(random(150, 255));
  var b = floor(random(200, 255));
  newP.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');

  var newPText = createElement('span', output);
  newPText.parent(newP);
}