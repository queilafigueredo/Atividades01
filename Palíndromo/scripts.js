function verificarPalindromo (palavra){
     var palavra = prompt("Digite uma palavra: ")

     var palavraInvertida = palavra.split('').reverse().join('');
      
     if(palavra == palavraInvertida){
        console.log(palavra + "É um palíndromo!");
     } else {
        console.log(palavra + "Não é um palíndromo!");
     }
   }