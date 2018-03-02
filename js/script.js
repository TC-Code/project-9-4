function drawTree(a) {

    for (var i = 1; i <= a; i++) {
        var star = '';
        for (var j = 1; j <= a - i; j++) {
            star += ' ';
        }
		for (var k = 1; k <= (i * 2 - 1); k++) {
            star += '*';
        }
        console.log(star);
    }
}
drawTree(10);