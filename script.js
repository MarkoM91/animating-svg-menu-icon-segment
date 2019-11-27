    // Linear section, with a callback to the next
function inAC(s) {
  s.draw('80% - 240', '80%', 0.3, {
    delay: 0.1,
    callback: function(){
      inAC2(s)
    }
  });
}

// Elastic section, using elastic-out easing function
function inAC2(s) {
  s.draw('100% - 545', '100% - 305', 0.6, {
    easing: ease.ease('elastic-out', 1, 0.3)
  });
}

// Expand the bar a bit
function inB(s) {
  s.draw(80 - 60, 320 + 60, 0.1, {
    callback: function(){
      inB2(s)
    }
  });
}

// Reduce with a bounce effect
function inB2(s) {
  s.draw(80 + 120, 320 - 120, 0.3, {
    easing: ease.ease('bounce-out', 1, 0.3)
  });
}

function outAC(s) {
  s.draw('90% - 240', '90%', 0.1, {
    easing: ease.ease('elastic-in', 1, 0.3),
    callback: function(){
      outAC2(s)
    }
  });
}

function outAC2(s) {
  s.draw('20% - 240', '20%', 0.3, {
    callback: function(){
      outAC3(s)
    }
  });
}

function outAC3(s) {
  s.draw(80, 320, 0.7, {
    easing: ease.ease('elastic-out', 1, 0.3)
  });
}

function outB(s) {
  s.draw(80, 320, 0.7, {
    delay: 0.1,
    easing: ease.ease('elastic-out', 2, 0.4)
  });
 }


function init() {
  let pathA = document.getElementById('pathA'),
  pathB = document.getElementById('pathB'),
  dummy = document.getElementById('dummy'),
  pathC = document.getElementById('pathC');
  segmentA = new Segment(pathA, 80, 320),
  segmentB = new Segment(pathB, 80, 320);
  segmentC = new Segment(pathC, 80, 320);

  let trigger = document.getElementById('menu-icon-trigger'),
  toCloseIcon = true;

  //console.log(pathA);
  $(trigger).click(function() {
    if (toCloseIcon) {
      inAC(segmentA);
      inB(segmentB);
      inAC(segmentC);
      dummy.className = 'dummy dummy--active';
    } else {
      outAC(segmentA);
      outB(segmentB);
      outAC(segmentC);
      dummy.className = 'dummy';
    }
    toCloseIcon = !toCloseIcon;
  });
}

//$(document).ready(init);
window.addEventListener('load', init, false);
