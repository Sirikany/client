var i=1
var wide,long,high
var area

var area = function() {

	console.log('THE  AREA ')
	console.log('Enter wide : ')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => {
		if (i === 1){
			wide= value
		console.log('Enter long:')}
		else if (i === 2){
			long= value
		console.log('Enter high:')}
		else {
			high= value
			stdin.destroy()
			area=wide*long*high
			console.log('THE  AREA = ' + area)
			}	
	i++	
	})
}

module.exports.area= area;