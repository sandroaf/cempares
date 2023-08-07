/* função parinpar() retorna se é um numero par ou ímpar. */
function parimpar(numero) {
   if ((numero % 2) === 0) {
      //número par.
      return "par";
   } else {
      return "impar";
   }
}

/* percorrer de 1 até determinado número e testa se é par ou ímpar */
function geraPares(ate) {
    const numeros = document.querySelector("#pNumeros");
    for (x=1;x++;x <= ate) {
        if (parimpar(x) === "par") {
            numeros.innerHTML += x + "<br>";
            /* numeros.innerHTML += equivale a numeros.innerHTML = numeros.innerHTML + */
        }
    }
} 