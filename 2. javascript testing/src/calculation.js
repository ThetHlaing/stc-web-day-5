const Calculation = {
	add : function(x,y){
		if(typeof x && typeof y !== 'number'){
			throw new Error("Parameters must be numbers");
		}
		let result = x + y;

		if(parseInt(result) !== result){
			result = parseFloat(result.toFixed(1));
		}
		
		return result;
	},

	divide : function(x,y){
		if(y === 0){
			throw new Error('Cannot divide by zero');
		}
		let result = x/y;
		if(parseInt(result) !== result){
			result = parseFloat(result.toFixed(2));
		}
		return result;
	}

}

