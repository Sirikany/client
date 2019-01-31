
var weight
var weight = function() {
	console.log('Calculate bag load')
	console.log('Enter weight:')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => {
	weight=value
		if (weight>=40) 
			console.log("1400 Baht") 	
		else if (weight>=30) 
			console.log("760 Baht") 
		else if (weight>=25) 
			console.log("400") 
		else if (weight>=20) 
			console.log("300")
		else if (weight>=15) 
			console.log("250") 
		else if (weight<15) 
			console.log("Free")  
		stdin.destroy()
		
	})
}

module.exports.weight= weight;