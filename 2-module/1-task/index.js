/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = Object.values(salaries).reduce((sum, val) => sum + (!isNaN(val) ? val : 0), 0);
  return sum;
}
