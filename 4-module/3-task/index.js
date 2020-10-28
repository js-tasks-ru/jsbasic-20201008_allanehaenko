/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

function highlight(table) {
    const cells = table.querySelectorAll('td[data-available]');

    cells.forEach(cell => {
      const row = cell.closest('tr');
      if (cell.dataset.available == 'true') {
        row.classList.add('available');
      } else if(cell.dataset.available == 'false') {
        row.classList.add('unavailable');
      }
    });

    let rowLength = table.rows.length;
    for(let i = 0;i<rowLength;i++){
      if(table.rows[i].cells[2].innerHTML == 'm') {
        table.rows[i].classList.add('male');
      } else if(table.rows[i].cells[2].innerHTML == 'f') {
        table.rows[i].classList.add('female');
      }
  }

  for(let i = 0;i<rowLength;i++){
    if(table.rows[i].cells[1].innerHTML < 18) {
      table.rows[i].cells[1].style.textDecoration = "line-through";
}
}
}  