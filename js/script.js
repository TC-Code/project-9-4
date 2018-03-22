function drawTree(a) {
  var star = '';
  for (var i = 0; i < a; i++) {
    star += "* ";
    var space = '';
    for (var j = a; j > i; j--) {
      space += ' ';
    }
    console.log(space + star);
  }
}

drawTree(4);
