const ftoc = function(f) {
  let cel = (f - 32) * 5/9
		if(cel == 0){
			return parseFloat(Math.round(cel))
		}else {
			return parseFloat(cel.toFixed(1))
		}
};

const ctof = function(c) {
  let fer = (c * 9/5) + 32
		if(c <= 0){
		return parseFloat(Math.round(fer))
	}else{
		return parseFloat(fer.toFixed(1))
	}
};

ftoc(32);
ftoc(100);
ftoc(-100);

ctof(0);
ctof(73.2);
ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
