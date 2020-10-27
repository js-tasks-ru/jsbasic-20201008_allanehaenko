/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

function highlight(table) {
    let rows = table.querySelectorAll("tr");
    rows.cells.each(function(item){
        let cellsAtr = item.getAttribute('data-available');
        if (cellsAtr == 'true') {
            table.classList.add('available');
        } else if(cellsAtr == 'false') {
            item.classList.add('unavailable');
        } 
    });
}

// function highlight(table) {
//     let cells = table.querySelectorAll("td");
//     cells.forEach(function(item){
//         let cellsAtr = item.getAttribute('data-available');
//         if (cellsAtr == 'true') {
//             table.classList.add('available');
//         } else if(cellsAtr == 'false') {
//             item.classList.add('unavailable');
//         } 
//     });
// }

