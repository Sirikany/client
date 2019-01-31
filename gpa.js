var i=1
var math,english,social
var credit_Math,credit_Social,credit_English
var avg
var sum
var total

var gpa = function() {

	console.log('Program calculate')
	let stdin = process.openStdin()
	console.log('Enter number grade of Math : ')
	stdin.addListener("data",(value) => {
		
		if (i === 1){
			math = value
			console.log('Enter number grade of credit_Math :')}

		else if (i === 2){
			credit_Math = value
			console.log('Enter number grade of Social :')}

		else if (i === 3){
			social = value
			console.log('Enter number grade of credit_Social :')}

		else if (i === 4){
			credit_Social = value
			console.log('Enter number grade of English :')}

		else if (i === 5){
			english = value
			console.log('Enter number grade of credit_English :')}

		else {
				credit_English = value
				stdin.destroy()
			
				avg = ((math*credit_Math)+(english*credit_English)+(social*credit_Social))
			
			    total = ((credit_Math*1.00)+(credit_English*1.00)+(credit_Social*1.00))

			    sum = (avg/total)
				console.log('Your GPA = ' + sum)
			}	
	i++	
	})
}

module.exports.gpa = gpa;