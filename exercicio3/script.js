/*# Exercício 3
Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.
Faça o que se pede abaixo nas **cópias** dos arrays originais:

a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.

b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.

c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
**Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.

d) Refaça os testes sem utilizar o slice, e analise o resultado e diga o que percebeu:*/

const arrayNum = [1,2,3];
const arrayString = ["joao","B","bola"];
const arrayMisto = [56,"casa",true];

const arrayNumCopia = arrayNum.slice();
const arrayStringCopia = arrayString.slice();
const arrayMistoCopia = arrayMisto.slice();

//a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.
arrayNum.unshift(200); // o metodo unshift adiciona um valor ou string no inicio do array, coloquei 200 mas poderia colocar qualquer coisa, "casa".
console.log (arrayNum , arrayNumCopia);

//b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.
arrayString.pop(); // o metodo pop remove o ultimo item do array.
console.log (arrayString , arrayStringCopia);

//c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
arrayMisto.splice(1,1);
console.log (arrayMisto , arrayMistoCopia);//splice remove o número que está no índice (x,1) do array seguido da quantidade de item (mostrado ali como valor 1) a ser removido da array. 

//d) Refaça os testes sem utilizar o slice, e analise o resultado e diga o que percebeu:*/
//Resposta:todos os arrays ficaram com eresultados iguais, original e cópia, mesmo as copias nao tendo sofrido alteração.