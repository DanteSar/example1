function sum() {
  
  /* берем значение от пользователя */

  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);
  
  /* производим суммирование */

  let c = a + b;
  let d = c;

  /* вывод результата в строку */

  document.getElementById('c').value = c;

  /* вывод результата в сплывающие окно */

  document.getElementById('d').value = d;

} 

