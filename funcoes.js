/* função parinpar() retorna se é um numero par ou ímpar. */
function parimpar(numero) {
   if ((numero % 2) == 0) {
      //número par.
      return "par";
   } else {
      return "impar";
   }
}

/* percorrer de 1 até determinado número e testa se é par ou ímpar */
function geraPares(ate) {
    const numeros = document.querySelector("#pNumeros");
    numeros.innerHTML = ""; //limpar o paragrafo de números
    for (x=1;x <= ate;x++) {
        console.log(x);
        if (parimpar(x) == "par") {
            numeros.innerHTML += x + "<br>";
            /* numeros.innerHTML += equivale a numeros.innerHTML = numeros.innerHTML + */
        }
    }
} 