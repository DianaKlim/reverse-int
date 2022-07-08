module.exports = function reverse(n) {
        // const reverse = (n) => {
    let nPositive = Math.abs(n);
    let lineNumber = String(nPositive);
    let resultReverse = String();
    for (i = lineNumber.length - 1; i >= 0; i--) {
        resultReverse += lineNumber[i]
        }
        return resultReverse;
        // console.log(resultReverse);
  };
    //   reverse('-261');
    //   reverse('451');


//костыльный вариант

// module.exports = function reverse(n) {
//     const ns = String(Math.abs(n));
//     const positionNumber1 = ns.length-1;
//     const positionNumber2 = ns.length-2;
//     const positionNumberend = ns.length-3;
//     const result2 = Number(ns[positionNumber1] + ns[positionNumber2] + ns[positionNumberend]);
//     return result2
 
//       };
