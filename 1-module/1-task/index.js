/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1 ;
  while(n){
    if ((n) == 0 || (n) == 1)
      break ;
    result = result * n;
    n = n - 1
   }
  return result;
}