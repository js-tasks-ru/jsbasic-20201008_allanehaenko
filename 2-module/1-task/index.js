/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  delete salaries.month;
  delete salaries.currency;
  delete salaries.isPayed;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}
