/*# Exercício 2

Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:

a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).

b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.

c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.

**Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.*/

//a)
const arrayNum = [1,2,3];
const arrayString = ["joao","B","bola"];
const arrayMisto = [56,"casa",true];

console.log(arrayNum.length); //a propriedade length retorna a quantidade de itens presentes no array
console.log(arrayString.length);
console.log(arrayMisto.length);

//b)
console.log(arrayNum[0]); //o num entre [] faz a impressão da posição no elemento no array
console.log(arrayString[0]);
console.log(arrayMisto[0]);

//c)
console.log(arrayNum.includes(2));
console.log(arrayMisto.includes("carro")); //Obs** A const arrayString não foi verificada pois não estava sendo solicitada no exercício :))