module.exports = function solveEquation(equation) {
   equation = equation.replace(/\s+/g, '');
  equation = equation.split('*x');
  var a = +equation[0];
  var c = +equation[2];
 
  equation = equation[1];
  equation = equation.split('^2');
  var b = +equation[1];
  
  var x1 = -b/ 2 /a + Math.pow(Math.pow(b,2) - 4 * a * c , 0.5) / 2 / a;
var x2 = -b/ 2 / a -Math.pow(Math.pow(b,2) - 4 * a * c ,0.5) / 2 / a;
 
 var x1 = Math.round(x1);
 var x2 = Math.round(x2);
 
 if(x1 <= x2){
   return([x1, x2]);
  }else{
    return([x2, x1]);
  }
}