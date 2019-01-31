var i=1
var nump, numh,power
var unit
var power = function() {

  console.log('Ideal Weight Calculator ')
  console.log('Enter your power (w):')
  let stdin = process.openStdin()
  stdin.addListener("data",(value) => {
    if (i === 1){
      power = value
      console.log('Enter your number of light  :')}
    else if (i === 2){
      nump = value
      console.log('Enter your number of hours  :')}
    else {
      numh = value
      stdin.destroy()
      unit = ((power*nump)/(1000*numh))
      console.log( 'kan :' + unit )
      } 
  i++ 
  })
}

module.exports.power= power;