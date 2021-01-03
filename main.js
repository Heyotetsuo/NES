var doc = document;
var sin = Math.sin, cos = Math.cos, PI = Math.PI;
var round = Math.round, floor = Math.floor, sqrt = Math.sqrt;
var rnd = Math.random, rndN = () => Math.random()*2-1;
var CANVAS = doc.querySelector("canvas");
var CD = { width: 256, height: 240, bgColor: "black" }
var C = CANVAS.getContext("2d");
var CLRS = [ "#000000", "#fcfcfc", "#f8f8f8", "#bcbcbc", "#7c7c7c", "#a4e4fc", "#3cbcfc", "#0078f8", "#0000fc", "#b8b8f8", "#6888fc", "#0058f8", "#0000bc", "#d8b8f8", "#9878f8", "#6844fc", "#4428bc", "#f8b8f8", "#f878f8", "#d800cc", "#940084", "#f8a4c0", "#f85898", "#e40058", "#a80020", "#f0d0b0", "#f87858", "#f83800", "#a81000", "#fce0a8", "#fca044", "#e45c10", "#881400", "#f8d878", "#f8b800", "#ac7c00", "#503000", "#d8f878", "#b8f818", "#00b800", "#007800", "#b8f8b8", "#58d854", "#00a800", "#006800", "#b8f8d8", "#58f898", "#00a844", "#005800", "#00fcfc", "#00e8d8", "#008888", "#004058", "#f8d8f8", "#787878" ]
function clearCanvas(){
	C.save();
	C.fillStyle = CD.bgColor;
	C.fillRect( 0, 0, CD.width, CD.height );
	C.restore();
}
function pSet( x, y, clr ){
	C.save();
	C.fillStyle = clr;
	C.fillRect( x, y, 1, 1 );
	C.restore();
}
function drawPixels( n, d ){ // number of points, density
	var clr,x1,y1;
	var px,py;
	var x2,y2,r1,r2,m;
	var i,j;
	for( i=0; i<n; i++ ) {
		x1 = round( rnd()*CD.width ), y1 = round( rnd()*CD.height );
		r1 = Math.sqrt( rnd()*( rnd()*256 ) );
		clr = CLRS[ floor( rnd()*CLRS.length ) ];
		px = rndN()*256, py = rndN()*240;
		while( i%d !== 0 ) {
			r2 = rnd()*r1;
			m = rndN()*r2;
			x2 = round( cos(m)*r2 + rnd()*px );
			y2 = round( sin(m)*r2 + rnd()*py );
			pSet( x1+x2, y1+y2, clr );
			i++;
		}
	}
}
function render()
{
	var numPixels = 256*64;
	var numStrokes = 8; 
	drawPixels(
		numPixels,
		numPixels / numStrokes
	);
}
function init(){
	clearCanvas();
}
function main(){
	init();
	drawPixels( 256*64, 256*4 );
}
main();
