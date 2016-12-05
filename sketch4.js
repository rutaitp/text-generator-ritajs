//THIS ONE INCLUDES TED TALK'S CONTENT INTO A USER'S STORY

var input;
var inputP;

var posdict;

var kenText;
var amyText;
var simonText;

function setup() {

  noCanvas();
  document.body.style.backgroundImage = "url('images/ted.jpg')";

  input = select('#textArea');
  inputP = select('#textAreaP');

  kenText = loadStrings('data/ken.txt');
  console.log(kenText);

  amyText = loadStrings('data/amy.txt');
  console.log(amyText);

  simonText = loadStrings('data/simon.txt');
  console.log(simonText);

  var kenButton = select('#ken');
  kenButton.mousePressed(kenF);
  var amyButton = select('#amy');
  amyButton.mousePressed(amyF);
  var simonButton = select('#simon');
  simonButton.mousePressed(simonF);
}

function kenF () {
  console.log("This is Ken's talk!");

  document.body.style.backgroundImage = "url('images/ken.jpg')";

  //TO WORK WITH INPUT TEXT
  talkText = input.value();
  talk = talkText.toLowerCase();

  var tokens = talk.split(/(\W+)/);

  posdict = {};

  for (var i = 0; i < tokens.length; i++) {
    var pos = RiTa.getPosTags(tokens[i]);
    //look for the first element to put into dictionary
    var first = pos[0];
    //if element first doesn't exist yet, create it as an array
    if (!posdict[first]) {
      posdict[first] = [];
    }
    //and push all the words that belong to it inside of it
    posdict[first].push(tokens[i]);
  }

  //TO WORK WITH TALK'S TEXT
  var kenTextString = kenText.toString();
  var kenTalk = kenTextString.toLowerCase();
  var kenTokens = kenTalk.split(/(\W+)/);
  posdictKen = {};

  for (var i = 0; i < kenTokens.length; i++) {
    var kenPos = RiTa.getPosTags(kenTokens[i]);
    //look for the first element to put into dictionary
    var first = kenPos[0];
    //if element first doesn't exist yet, create it as an array
    if (!posdictKen[first]) {
      posdictKen[first] = [];
    }
    //and push all the words that belong to it inside of it
    posdictKen[first].push(kenTokens[i]);
  }

  //GENERATE NEW OUTPUT
  var kenOutput = '';

  for (var i = 0; i < tokens.length; i++) {
    var kenPos = RiTa.getPosTags(kenTokens[i]);
    var pos = RiTa.getPosTags(tokens[i]);
    var first = pos[0];

    // kenOutput += random(posdictKen[first]);

    if (first == 'nn') {
      // pick a random noun from posdictKen['n']
      kenOutput += random(posdictKen['nn']);
    } else if (first == 'jj') {
      // pick a random noun from posdictKen['n']
      kenOutput += random(posdictKen['jj']);
    } else if (first == 'nns') {
      kenOutput += random(posdictKen['nns']);
    } else if (first == 'dt') {
      kenOutput += random(posdictKen['dt']);
    } else if (first == 'rb') {
      kenOutput += random(posdictKen['rb']);
    } else if (first == 'uh') {
      kenOutput += random(posdictKen['uh']);
    } else if (first == 'vb') {
      kenOutput += random(posdictKen['vb']);
    } else {
      kenOutput += tokens[i];  
    }
  }
  kenOutput.replace(/\n/,'<br/>');
  console.log(kenOutput);

  var newP = createP('');
  newP.class('text');

  // var r = floor(random(100, 255));
  // var g = floor(random(150, 255));
  // var b = floor(random(200, 255));
  // newP.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  newP.style("background-color", "white");
  newP.style("float", "right");
  newP.style("opacity", "0.8");
  newP.style("border", "none");

  var newPText = createElement('span', kenOutput);
  newPText.parent(newP);
  newP.parent(inputP);

}

function amyF () {
  console.log("This is Amy's talk!");

  document.body.style.backgroundImage = "url('images/amy2.jpg')";

  //TO WORK WITH INPUT TEXT
  talkText = input.value();
  talk = talkText.toLowerCase();

  var tokens = talk.split(/(\W+)/);

  posdict = {};

  for (var i = 0; i < tokens.length; i++) {
    var pos = RiTa.getPosTags(tokens[i]);
    //look for the first element to put into dictionary
    var first = pos[0];
    //if element first doesn't exist yet, create it as an array
    if (!posdict[first]) {
      posdict[first] = [];
    }
    //and push all the words that belong to it inside of it
    posdict[first].push(tokens[i]);
  }

  //TO WORK WITH TALK'S TEXT
  var amyTextString = amyText.toString();
  var amyTalk = amyTextString.toLowerCase();
  var amyTokens = amyTalk.split(/(\W+)/);
  posdictAmy = {};

  for (var i = 0; i < amyTokens.length; i++) {
    var amyPos = RiTa.getPosTags(amyTokens[i]);
    //look for the first element to put into dictionary
    var first = amyPos[0];
    //if element first doesn't exist yet, create it as an array
    if (!posdictAmy[first]) {
      posdictAmy[first] = [];
    }
    //and push all the words that belong to it inside of it
    posdictAmy[first].push(amyTokens[i]);
  }

  //GENERATE NEW OUTPUT
  var amyOutput = '';

  for (var i = 0; i < tokens.length; i++) {
    var amyPos = RiTa.getPosTags(amyTokens[i]);
    var pos = RiTa.getPosTags(tokens[i]);
    var first = pos[0];

    // kenOutput += random(posdictKen[first]);

    if (first == 'nn') {
      // pick a random noun from posdictKen['n']
      amyOutput += random(posdictAmy['nn']);
    } else if (first == 'jj') {
      // pick a random noun from posdictKen['n']
      amyOutput += random(posdictAmy['jj']);
    } else if (first == 'nns') {
      amyOutput += random(posdictAmy['nns']);
    } else if (first == 'dt') {
      amyOutput += random(posdictAmy['dt']);
    } else if (first == 'rb') {
      amyOutput += random(posdictAmy['rb']);
    } else if (first == 'uh') {
      amyOutput += random(posdictAmy['uh']);
    } else if (first == 'vb') {
      amyOutput += random(posdictAmy['vb']);
    } else {
      amyOutput += tokens[i];  
    }
  }
  amyOutput.replace(/\n/,'<br/>');
  console.log(amyOutput);

  var newP = createP('');
  newP.class('text');

  // var r = floor(random(100, 255));
  // var g = floor(random(150, 255));
  // var b = floor(random(200, 255));
  //newP.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  newP.style("background-color", "white");
  newP.style("float", "right");
  newP.style("opacity", "0.8");
  newP.style("border", "none");

  var newPText = createElement('span', amyOutput);
  newPText.parent(newP);
  newP.parent(inputP);
}

function simonF () {
  console.log("This is Simon's talk!");

  document.body.style.backgroundImage = "url('images/simon.jpg')";

  //TO WORK WITH INPUT TEXT
  talkText = input.value();
  talk = talkText.toLowerCase();

  var tokens = talk.split(/(\W+)/);

  posdict = {};

  for (var i = 0; i < tokens.length; i++) {
    var pos = RiTa.getPosTags(tokens[i]);
    //look for the first element to put into dictionary
    var first = pos[0];
    //if element first doesn't exist yet, create it as an array
    if (!posdict[first]) {
      posdict[first] = [];
    }
    //and push all the words that belong to it inside of it
    posdict[first].push(tokens[i]);
  }

  //TO WORK WITH TALK'S TEXT
  var simonTextString = simonText.toString();
  var simonTalk = simonTextString.toLowerCase();
  var simonTokens = simonTalk.split(/(\W+)/);
  posdictSimon = {};

  for (var i = 0; i < simonTokens.length; i++) {
    var simonPos = RiTa.getPosTags(simonTokens[i]);
    //look for the first element to put into dictionary
    var first = simonPos[0];
    //if element first doesn't exist yet, create it as an array
    if (!posdictSimon[first]) {
      posdictSimon[first] = [];
    }
    //and push all the words that belong to it inside of it
    posdictSimon[first].push(simonTokens[i]);
  }

  //GENERATE NEW OUTPUT
  var simonOutput = '';

  for (var i = 0; i < tokens.length; i++) {
    var simonPos = RiTa.getPosTags(simonTokens[i]);
    var pos = RiTa.getPosTags(tokens[i]);
    var first = pos[0];

    // kenOutput += random(posdictKen[first]);

    if (first == 'nn') {
      // pick a random noun from posdictKen['n']
      simonOutput += random(posdictSimon['nn']);
    } else if (first == 'jj') {
      // pick a random noun from posdictKen['n']
      simonOutput += random(posdictSimon['jj']);
    } else if (first == 'nns') {
      simonOutput += random(posdictSimon['nns']);
    } else if (first == 'dt') {
      simonOutput += random(posdictSimon['dt']);
    } else if (first == 'rb') {
      simonOutput += random(posdictSimon['rb']);
    } else if (first == 'uh') {
      simonOutput += random(posdictSimon['uh']);
    } else if (first == 'vb') {
      simonOutput += random(posdictSimon['vb']);
    } else {
      simonOutput += tokens[i];  
    }
  }
  simonOutput.replace(/\n/,'<br/>');
  console.log(simonOutput);

  var newP = createP('');
  newP.class('text');

  // var r = floor(random(100, 255));
  // var g = floor(random(150, 255));
  // var b = floor(random(200, 255));
  //newP.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  newP.style("background-color", "white");
  newP.style("float", "right");
  newP.style("opacity", "0.8");
  newP.style("border", "none");

  var newPText = createElement('span', simonOutput);
  newPText.parent(newP);
  newP.parent(inputP);
}