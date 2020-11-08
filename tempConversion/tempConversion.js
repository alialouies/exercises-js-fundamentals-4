const ftoc = function(numb) {
   let cel = (numb - 32 ) / 1.8 ;
   let roundedCel = Math.round(cel * 10) / 10;
   return roundedCel;
}

const ctof = function(numb) {
  let fahr = (numb * 1.8) + 32;
  let roundedFahr = Math.round(fahr * 10) / 10;
  return roundedFahr;
}

module.exports = {
  ftoc,
  ctof
}
